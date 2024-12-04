import profile from "../assets/SurabhiPicPro.jpg"
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div
        className="sidebar-profile"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src={profile}
          alt="Profile"
        />
        <span style={{fontWeight:'bolder'}}> Admin </span>
      </div>
      <ul className="sidebar-menu">
        <li>User Management</li>
        <li>Product Management</li>
        <li>Order Management</li>
        <li>Reports & Analytics</li>
      </ul>
    </div>
  );
};

