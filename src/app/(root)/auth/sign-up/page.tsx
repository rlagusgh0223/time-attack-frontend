"use client";

import Page from "@/components/Page";

function SignUpPage() {
  // const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });
  // const idInputRef = useRef<HTMLInputElement>(null);
  // const pwInputRef = useRef<HTMLInputElement>(null);
  // const pw2InputRef = useRef<HTMLInputElement>(null);
  // const { logIn } = useAuth();

  // const handleClickSignUp = async () => {
  //   const idValue = idInputRef.current?.value;
  //   const pwValue = pwInputRef.current?.value;
  //   const pw2Value = pw2InputRef.current?.value;

  //   if (!idValue || !pwValue || !pw2Value) {
  //     return alert("입력 안된 부분 확인");
  //   }
  //   if (pwValue !== pw2Value)
  //     return alert("비밀번호와 비밀번호 확인이 다릅니다");

  //   const { accessToken } = await mutateAsync({ id: idValue, pw: pwValue });
  //   logIn(accessToken);
  // };
  return (
    <Page>
      {/*       
      <input ref={idInputRef} placeholder="이메일" />
      <input ref={pwInputRef} placeholder="비밀번호" />
      <input ref={pw2InputRef} placeholder="비밀번호 확인" />
      <button onClick={handleClickSignUp}>회원가입</button> */}
      <input placeholder="이메일" />
      <input placeholder="비밀번호" />
      <input placeholder="비밀번호 확인" />
      <button>회원가입</button>
    </Page>
  );
}

export default SignUpPage;
