import { FormField } from '../../../../../components/form/FormField.jsx';

export function SignupForm() {
  return (
    <div className="flex flex-col m-auto p-10 w-1/3 h-2/3 bg-[#63B69C] justify-center items-center text-[#EDE7D9]">
      <div className="m-3.5">
        <h1 className="uppercase text-3xl font-bold">Create Account</h1>
      </div>
      <FormField
        field={'firstName'}
        placeholder={'First Name'}
        label={'Enter your first name'}
        inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-6 '}
        className={'flex flex-col  justify-center items-center w-full h-16 m-3'}
      />
      <FormField
        field={'lastName'}
        placeholder={'Last Name'}
        label={'Enter your last name'}
        inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-6 '}
        className={'flex flex-col  justify-center items-center w-full h-16 m-3 '}
      />
      <FormField
        field={'email'}
        placeholder={'Email'}
        label={'Enter your email address'}
        inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-6 '}
        className={'flex flex-col  justify-center items-center w-full h-16 m-3 '}
      />
      <FormField
        field={'password'}
        placeholder={'Password'}
        label={'Enter your password'}
        inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-6 '}
        className={'flex flex-col  justify-center items-center w-full h-16 m-3 '}
      />
      <FormField
        field={'confirmPassword'}
        placeholder={'Confirm Password'}
        label={'Confirm Password'}
        inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-6 '}
        className={'flex flex-col  justify-center items-center w-full h-16 m-3 '}
      />
      <div>{/*TODO Create Button component*/}</div>
    </div>
  );
}
