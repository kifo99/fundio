import { Form } from '../../../../components/form/Form';
import { AuthButton } from './AuthButton';
import { SocialAuth } from './SocialAuth';
import { SignupFormFields } from './SignupFormFields';

export function SignupForm({ onSetMode }) {
  return (
    <Form className="flex flex-col p-6 w-full h-full bg-[#FAF8F4] items-center text-[#1C1D1B]">
      <div className="flex flex-col justify-center items-center mt-12 mb-8">
        <h1 className="text-3xl font-bolder">Create an account!!</h1>
      </div>

      <SignupFormFields />

      <AuthButton
        className="w-full bg-[#3D5A45] hover:bg-[#324A39] transition-colors rounded-xl h-14 mt-8 font-medium text-lg text-white"
        type={'Signup'}
      />

      <span className="text-[#6B6B63] text-base mt-12">
        Already have an account?{' '}
        <button
          className="text-[#3D5A45] font-medium underline underline-offset-2"
          onClick={() => onSetMode('login')}
        >
          Login
        </button>
      </span>

      <SocialAuth />
    </Form>
  );
}
