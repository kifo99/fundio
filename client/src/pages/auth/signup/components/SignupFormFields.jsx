import { FormField } from '../../../../components/form/FormField';

export function SignupFormFields() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex w-full">
        <FormField
          field={'firstName'}
          placeholder={'First name'}
          inputStyle="w-full h-14 px-4 rounded-l-lg border border-r-0 border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] focus:z-10 transition-colors"
          className="w-1/2"
        />
        <FormField
          field={'lastName'}
          placeholder={'Last name'}
          inputStyle="w-full h-14 px-4 rounded-r-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] focus:z-10 transition-colors"
          className="w-1/2"
        />
      </div>
      <FormField
        field={'email'}
        placeholder={'Email'}
        inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
        className="w-full"
      />
      <FormField
        field={'password'}
        placeholder={'Password'}
        inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
        className="w-full"
      />
      <FormField
        field={'confirmPassword'}
        placeholder={'Confirm password'}
        inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
        className="w-full"
      />
    </div>
  );
}
