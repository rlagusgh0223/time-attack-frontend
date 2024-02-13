import Modal from "@/components/Modal";

function page() {
  return (
    <div>
      <Modal title="로그인">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </Modal>
    </div>
  );
}

export default page;
