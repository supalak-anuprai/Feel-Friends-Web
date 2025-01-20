import { useState } from "react";
export default function DialogConfirm({
  open = false,
  onClose = () => {},
  title = "",
  content = "",
  confirmFunc = () => {},
}) {
  const handleConfirm = () => {
    confirmFunc();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      {/* ปุ่มที่กดเพื่อแสดง Dialog */}
      {/* <button className="btn btn-warning" onClick={() => setIsOpen(true)}>
        Show Confirm Dialog
      </button> */}

      {/* Confirm Dialog */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="my-4 text-gray-700">{content}</p>

              <div className="modal-action">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={handleConfirm}
                >
                  ยืนยัน
                </button>
                <button className="btn btn-sm btn-error" onClick={handleCancel}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
