import { createPortal } from "react-dom";
export default function Modal({open,onClose,title,children,descId}:{open:boolean;onClose:()=>void;title:string;children:React.ReactNode;descId?:string}){
  if(!open) return null;
  const root=document.getElementById('modal-root')!;
  const stop=(e:React.MouseEvent)=>e.stopPropagation();
  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" aria-describedby={descId} onClick={onClose}>
      <div className="modal__backdrop"/>
      <FocusTrap active={open}>
        <div className="modal__card" onClick={stop}>
          <h3 id="m-title" style={{margin:0}}>{title}</h3>
          <div className="mt-3 text-mute" id={descId}>{children}</div>
          <div className="mt-4" style={{textAlign:'right'}}><button className="btn focus-ring" onClick={onClose} autoFocus>Close</button></div>
        </div>
      </FocusTrap>
    </div>, root
  );
}
