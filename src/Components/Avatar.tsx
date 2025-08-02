import { MDBBadge } from 'mdb-react-ui-kit';
import { IoMdCart } from 'react-icons/io';
export default function Avatar() {
  return (
    <div className="d-inline-flex position-relative">
      <MDBBadge className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
        <span className="hidden">15</span>
      </MDBBadge>
      <IoMdCart style={{ fontSize: '25px' }} />
    </div>
  );
}
