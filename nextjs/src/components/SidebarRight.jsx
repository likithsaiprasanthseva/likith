import Link from "next/link";

export default function SidebarRight() {
  return (
    <div className="app-sidebar-end">
      <ul className="sidebar-list">
        <li>
          <Link href="/task-management">
            <div className="avatar avatar-sm bg-warning shadow-sharp-warning rounded-circle text-white mx-auto mb-2">
              <i className="fi fi-rr-to-do"></i>
            </div>
            <span className="text-dark">Task</span>
          </Link>
        </li>
        <li>
          <Link href="/pages/faq">
            <div className="avatar avatar-sm bg-secondary shadow-sharp-secondary rounded-circle text-white mx-auto mb-2">
              <i className="fi fi-rr-interrogation"></i>
            </div>
            <span className="text-dark">Help</span>
          </Link>
        </li>
        <li>
          <Link href="/calendar">
            <div className="avatar avatar-sm bg-info shadow-sharp-info rounded-circle text-white mx-auto mb-2">
              <i className="fi fi-rr-calendar"></i>
            </div>
            <span className="text-dark">Event</span>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <div className="avatar avatar-sm bg-gray shadow-sharp-gray rounded-circle text-white mx-auto mb-2">
              <i className="fi fi-rr-settings"></i>
            </div>
            <span className="text-dark">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
