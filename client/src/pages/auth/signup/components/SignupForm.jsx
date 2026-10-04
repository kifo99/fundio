import { Form } from '../../../../components/form/Form';
import { AuthButton } from './AuthButton';
import { SocialAuth } from './SocialAuth';
import { SignupFormFields } from './SignupFormFields';

export function SignupForm({ className, onSetUserInput, onSetMode = null }) {
  return (
    <Form className={className} onSetUserInput={onSetUserInput}>
      <div className="flex flex-col justify-center items-center mt-12 mb-8">
        <h1 className="text-3xl font-bolder">Create an account!!</h1>
      </div>

      <SignupFormFields />

      <AuthButton
        className="w-full bg-[#3D5A45] hover:bg-[#324A39] uppercase transition-colors rounded-xl h-14 mt-8 font-medium text-lg text-white"
        type={'signup'}
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
