interface ModalProps {
  title: string;
}

function Modal({ title, children }) {
  return (
    <div className="fixed top-0 left-0 bg-black/50 w-screen h-screen">
      <div className="bg-white w-full max-w-screen-sm mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-12 shadow-2xl drop-shadow-2xl rounded-lg">
        <h2>로그인</h2>
      </div>
    </div>
  );
}

export default Modal;
