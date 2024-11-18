# Guia Prático: Formik com React

## 1. **O que é Formik?**
Formik é uma biblioteca para gerenciamento de formulários em React. Ela simplifica a validação, gerenciamento de estado e submissão de formulários.

## 2. **Principais Conceitos**

### **Hook Principal: `useFormik`**
Retorna métodos e estados para gerenciar formulários:

- **`initialValues`**: Valores iniciais do formulário.
- **`validationSchema`**: Validação usando bibliotecas como **Yup**.
- **`onSubmit`**: Função chamada ao submeter o formulário.

### **Estados e Métodos Retornados**

- **`values`**: Valores atuais do formulário.
- **`errors`**: Mensagens de erro para cada campo.
- **`touched`**: Indica se um campo foi tocado.
- **`handleChange`**: Atualiza valores quando o usuário digita.
- **`handleBlur`**: Marca o campo como tocado.
- **`handleSubmit`**: Gerencia o envio do formulário.
- **`isSubmitting`**: Indica se o formulário está em processo de submissão.

---

## 3. **Exemplo Completo**

### **Validação com Yup**

```javascript
import * as Yup from 'yup';

export const basicSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  age: Yup.number().positive().integer().required('Required'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

```

### **Componente de Formulário**

```javascript
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const BasicForm = () => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm(); // Reseta o formulário após submissão
    },
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>Email</label>
      <input
        id="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'input-error' : ''}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label>Age</label>
      <input
        id="age"
        type="number"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? 'input-error' : ''}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label>Password</label>
      <input
        id="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? 'input-error' : ''}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label>Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
```
## 4. **Dicas e Melhorias**

- **Feedback Visual**: Campos com erro podem ter estilos específicos, como bordas vermelhas.
- **AutoComplete**: Use `autoComplete="off"` para dados sensíveis.
- **Desabilitar Botão**: Evite múltiplas submissões desabilitando o botão com `isSubmitting`.

```css
.input-error {
  border: 1px solid red;
}

.error {
  color: red;
  font-size: 0.8em;
}
```

## 5. **Resumo**

Formik facilita:

- **Gerenciamento de valores e erros**.
- **Validação automática** com **Yup**.
- **Submissão assíncrona** com controle de estados como `isSubmitting`.

Pronto para criar formulários robustos e escaláveis com o mínimo de esforço! 🚀


