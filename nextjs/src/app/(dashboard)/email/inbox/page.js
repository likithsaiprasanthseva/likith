"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const initialMails = [
  {
    id: 1,
    username: "PixelMarket",
    subject: "🎨 Fresh Color Kits Just Dropped!-",
    text: "Add vibrance to your summer projects with pastel gradients and neon palettes.",
    time: "08:40 AM",
    unread: false,
    starred: false,
    tab: "inbox"
  },
  {
    id: 2,
    username: "DesignWave",
    subject: "💰 You Made a Sale!",
    text: "Congrats, layoutWave! Your product “MetroGrid Figma Layout” has sold for $6.50 USD.",
    time: "1:02 AM",
    unread: false,
    starred: true,
    tab: "inbox"
  },
  {
    id: 3,
    username: "SiteTracker",
    subject: "📊 1,000 Visitors Reached",
    text: "Great job! Your site is gaining traction — keep the momentum going!",
    time: "Jul 21",
    unread: true,
    starred: false,
    tab: "inbox"
  },
  {
    id: 4,
    username: "ThemeHive",
    subject: "Review Digest – July 20th",
    text: "Hello layoutWave, 2 themes approved and published to the marketplace.",
    time: "Jul 21",
    unread: true,
    starred: false,
    tab: "inbox"
  },
  {
    id: 5,
    username: "PixelMarket",
    subject: "Must-Have Fonts for Creators",
    text: "Explore our top picks for minimal, bold, and handwritten font styles this season.",
    time: "Jul 20",
    unread: false,
    starred: false,
    tab: "inbox"
  },
  {
    id: 6,
    username: "DesignWave QA",
    subject: "⚠️ Feedback on Recent Upload",
    text: "Please fix responsiveness and padding issues on the layout model.",
    time: "Jul 20",
    unread: true,
    starred: false,
    tab: "inbox"
  },
  {
    id: 7,
    username: "ThemeHive",
    subject: "🛑 Hard Rejection – July 18",
    text: "Our “NewsNow” template did not meet our layout standards. Check feedback log.",
    time: "Jul 20",
    unread: false,
    starred: true,
    tab: "inbox"
  },
  {
    id: 8,
    username: "PixelMarket",
    subject: "🌟 Trending Items This Week",
    text: "See what's rising in popularity among designers and developers alike.",
    time: "Jul 20",
    unread: false,
    starred: false,
    tab: "inbox"
  },
  {
    id: 9,
    username: "DesignWave Support",
    subject: "[Published] StudioX Portfolio Template",
    text: "Hi layoutWave, your new portfolio template is now live and ready to be purchased.",
    time: "Jul 19",
    unread: false,
    starred: false,
    tab: "inbox"
  },
  {
    id: 10,
    username: "TemplateGalaxy Team",
    subject: "✅ Your Template Passed Review",
    text: "ZenBlocks UI System” is now listed on TemplateGalaxy. Congrats on the launch!",
    time: "Jul 19",
    unread: false,
    starred: false,
    tab: "inbox"
  },
  {
    id: 11,
    username: "To: Sophia Hall",
    subject: "Re: Design Proposal",
    text: "Here is the revised design file with user flow updates for the review process.",
    time: "Jul 18",
    unread: false,
    starred: false,
    tab: "sent"
  },
  {
    id: 12,
    username: "To: Emma Smith",
    subject: "Invoice #1042",
    text: "Please find attached the invoice for services completed in the first half of July.",
    time: "Jul 15",
    unread: false,
    starred: true,
    tab: "sent"
  },
  {
    id: 13,
    username: "Draft",
    subject: "New Portfolio Idea",
    text: "I should think about building a minimalist dark theme utilizing glassmorphism...",
    time: "Jul 10",
    unread: false,
    starred: false,
    tab: "drafts"
  },
  {
    id: 14,
    username: "Spammer",
    subject: "Earn $5000/day from home!!!",
    text: "Sign up today to start earning huge passive income instantly with zero effort.",
    time: "Jul 05",
    unread: false,
    starred: false,
    tab: "trash"
  },
  {
    id: 15,
    username: "MegaPromo",
    subject: "Get 90% off all hosting plans",
    text: "Limited time offer, hosting starting at $0.99 with free domain and SSL cert.",
    time: "Jul 01",
    unread: false,
    starred: false,
    tab: "spam"
  },
  {
    id: 16,
    username: "Git Notification",
    subject: "[Merged] Pull Request #12",
    text: "Merge branch main into dev has been completed successfully. No conflicts.",
    time: "Jun 28",
    unread: false,
    starred: false,
    tab: "archive"
  }
];

export default function Page() {
  const [mails, setMails] = useState(initialMails);
  const [activeTab, setActiveTab] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);

  useEffect(() => {
    // Sidebar toggler for mobile mail view
    const sidebarToggler = document.querySelector('.mail-sidebar-toggler');
    const mailSidebar = document.querySelector('.mail-sidebar');
    const overlay = document.querySelector('.mail-wrapper .sidebar-mobile-overlay');
    
    const toggleSidebar = () => {
      if (mailSidebar) mailSidebar.classList.toggle('show');
      if (overlay) overlay.classList.toggle('show');
    };

    if (sidebarToggler) sidebarToggler.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    return () => {
      if (sidebarToggler) sidebarToggler.removeEventListener('click', toggleSidebar);
      if (overlay) overlay.removeEventListener('click', toggleSidebar);
    };
  }, []);

  // Filter mails based on selected tab and search query
  const getFilteredMails = () => {
    return mails.filter(mail => {
      // If activeTab is starred, show all starred mails across all tabs except trash
      if (activeTab === "starred") {
        if (mail.tab === "trash") return false;
        if (!mail.starred) return false;
      } else {
        if (mail.tab !== activeTab) return false;
      }

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        return (
          mail.username.toLowerCase().includes(query) ||
          mail.subject.toLowerCase().includes(query) ||
          mail.text.toLowerCase().includes(query)
        );
      }

      return true;
    });
  };

  const visibleMails = getFilteredMails();

  // Handle toggling single email starred state
  const toggleStar = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setMails(prev =>
      prev.map(mail => (mail.id === id ? { ...mail, starred: !mail.starred } : mail))
    );
  };

  // Handle toggling single checkable state
  const toggleCheck = (id) => {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Handle check all checkbox
  const handleCheckAll = (e) => {
    if (e.target.checked) {
      const allVisibleIds = visibleMails.map(m => m.id);
      setCheckedIds(prev => Array.from(new Set([...prev, ...allVisibleIds])));
    } else {
      const allVisibleIds = visibleMails.map(m => m.id);
      setCheckedIds(prev => prev.filter(id => !allVisibleIds.includes(id)));
    }
  };

  // Check if all visible items are checked
  const isAllChecked =
    visibleMails.length > 0 &&
    visibleMails.every(mail => checkedIds.includes(mail.id));

  // Move checked items to trash, or delete permanently if already in trash
  const deleteCheckedMails = () => {
    if (checkedIds.length === 0) return;
    setMails(prev =>
      prev.map(mail => {
        if (checkedIds.includes(mail.id)) {
          if (mail.tab === "trash") {
            // Remove from state entirely
            return null;
          }
          return { ...mail, tab: "trash" };
        }
        return mail;
      }).filter(Boolean)
    );
    setCheckedIds([]);
  };

  // Archive checked items
  const archiveCheckedMails = () => {
    if (checkedIds.length === 0) return;
    setMails(prev =>
      prev.map(mail => {
        if (checkedIds.includes(mail.id) && mail.tab !== "trash") {
          return { ...mail, tab: "archive" };
        }
        return mail;
      })
    );
    setCheckedIds([]);
  };

  // Refresh / Reset selection
  const refreshSelection = () => {
    setCheckedIds([]);
  };

  // Count unread inbox items
  const unreadInboxCount = mails.filter(m => m.tab === "inbox" && m.unread).length;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card card-body overflow-hidden mail-wrapper p-0">
              <div className="sidebar-mobile-overlay"></div>
              
              <div className="mail-sidebar bg-light">
                <div className="px-3 pt-3 mb-2">
                  <Link href="/email/compose" className="btn btn-primary waves-effect waves-light w-100">
                    Compose
                  </Link>
                </div>
                
                <div className="d-grid gap-2 p-2 mail-nav" id="myTab" role="tablist">
                  <button 
                    onClick={() => { setActiveTab("inbox"); refreshSelection(); }}
                    className={`mail-nav-item border-0 text-start bg-transparent ${activeTab === "inbox" ? "active" : ""}`}
                  >
                    <i className="fi fi-rr-inbox-in me-2"></i> Inbox
                    {unreadInboxCount > 0 && (
                      <span className="badge badge-sm bg-primary-subtle text-primary ms-auto">{unreadInboxCount}</span>
                    )}
                  </button>
                  <button 
                    onClick={() => { setActiveTab("sent"); refreshSelection(); }}
                    className={`mail-nav-item border-0 text-start bg-transparent ${activeTab === "sent" ? "active" : ""}`}
                  >
                    <i className="fi fi-rr-paper-plane-top me-2"></i> Sent
                  </button>
                  <button 
                    onClick={() => { setActiveTab("drafts"); refreshSelection(); }}
                    className={`mail-nav-item border-0 text-start bg-transparent ${activeTab === "drafts" ? "active" : ""}`}
                  >
                    <i className="fi fi-rr-blueprint me-2"></i> Drafts
                  </button>
                  <button 
                    onClick={() => { setActiveTab("trash"); refreshSelection(); }}
                    className={`mail-nav-item border-0 text-start bg-transparent ${activeTab === "trash" ? "active" : ""}`}
                  >
                    <i className="fi fi-rr-trash me-2"></i> Trash
                  </button>
                  <button 
                    onClick={() => { setActiveTab("starred"); refreshSelection(); }}
                    className={`mail-nav-item border-0 text-start bg-transparent ${activeTab === "starred" ? "active" : ""}`}
                  >
                    <i className="fi fi-rr-star me-2"></i> Starred
                  </button>
                  <button 
                    onClick={() => { setActiveTab("spam"); refreshSelection(); }}
                    className={`mail-nav-item border-0 text-start bg-transparent ${activeTab === "spam" ? "active" : ""}`}
                  >
                    <i className="fi fi-rr-square-info me-2"></i> Spam
                  </button>
                  <button 
                    onClick={() => { setActiveTab("archive"); refreshSelection(); }}
                    className={`mail-nav-item border-0 text-start bg-transparent ${activeTab === "archive" ? "active" : ""}`}
                  >
                    <i className="fi fi-rr-box me-2"></i> Archive
                  </button>
                  <Link href="/calendar" className="mail-nav-item">
                    <i className="fi fi-rr-calendar me-2"></i> Scheduled
                  </Link>
                </div>
              </div>

              <div className="mail-body">
                <div className="mail-header">
                  <button className="btn btn-white btn-shadow btn-icon waves-effect mail-sidebar-toggler d-lg-none">
                    <i className="fi fi-rs-list"></i>
                  </button>
                  
                  <div className="d-flex align-items-center h-100 w-200px w-md-250px position-relative me-auto">
                    <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
                      <i className="fi fi-rr-search"></i>
                    </button>
                    <input 
                      type="text" 
                      className="form-control ps-5" 
                      placeholder="Search mail..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="d-flex align-items-center gap-3">
                    <span>
                      {visibleMails.length > 0 ? `1 - ${visibleMails.length} of ${visibleMails.length}` : "0 - 0 of 0"}
                    </span>
                    <div className="d-flex gap-2">
                      <button className="btn btn-white btn-shadow btn-icon waves-effect" disabled>
                        <i className="fi fi-rr-angle-left text-2xs"></i>
                      </button>
                      <button className="btn btn-white btn-shadow btn-icon waves-effect" disabled>
                        <i className="fi fi-rr-angle-right text-2xs"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="checkable-wrapper">
                  <div className="d-flex bg-light px-3 py-2 align-items-center gap-2 border-bottom">
                    <div className="form-check m-0 ms-1">
                      <input 
                        className="form-check-input checkable-check-all" 
                        type="checkbox"
                        checked={isAllChecked}
                        onChange={handleCheckAll}
                      />
                    </div>
                    <button 
                      onClick={refreshSelection} 
                      className="btn btn-link p-0 text-body ms-1"
                      title="Clear selection"
                    >
                      <i className="fi fi-rr-rotate-right"></i>
                    </button>
                    
                    {checkedIds.length > 0 && (
                      <div className="d-flex align-items-center gap-2 ms-2">
                        <button 
                          onClick={deleteCheckedMails}
                          className="btn btn-sm btn-white btn-shadow text-danger d-flex align-items-center gap-1"
                          title="Delete selected"
                        >
                          <i className="fi fi-rr-trash"></i> Delete
                        </button>
                        {activeTab !== "archive" && activeTab !== "trash" && (
                          <button 
                            onClick={archiveCheckedMails}
                            className="btn btn-sm btn-white btn-shadow d-flex align-items-center gap-1"
                            title="Archive selected"
                          >
                            <i className="fi fi-rr-box"></i> Archive
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <ul className="list-unstyled mail-list m-0 gradient-layer" style={{ overflowY: "auto", maxHeight: "600px" }}>
                    {visibleMails.length === 0 ? (
                      <li className="p-4 text-center text-muted">
                        No messages found in this folder.
                      </li>
                    ) : (
                      visibleMails.map((mail) => {
                        const isChecked = checkedIds.includes(mail.id);
                        return (
                          <li 
                            key={mail.id} 
                            className={`mail-list-item checkable-item ${mail.unread ? "mail-unread" : ""} ${isChecked ? "is-checked" : ""}`}
                          >
                            <div className="form-check my-0 me-2" onClick={(e) => e.stopPropagation()}>
                              <input 
                                className="form-check-input checkable-check-input" 
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleCheck(mail.id)}
                              />
                            </div>
                            <a 
                              onClick={(e) => toggleStar(e, mail.id)} 
                              className={`mail-item-bookmark ${mail.starred ? "active" : ""}`} 
                              href="#"
                            >
                              <i className="fi fi-rr-star me-2 me-sm-3"></i>
                            </a>
                            <Link href="/email/read-email" className="mail-item-content ms-2 ms-sm-0 me-2">
                              <span className="mail-item-username me-2">{mail.username}</span>
                              <span className="mail-item-subject">{mail.subject}</span>
                              <span className="mail-item-text text-body">{mail.text}</span>
                            </Link>
                            <div className="mail-item-meta ms-auto">
                              <small className="mail-item-time">{mail.time}</small>
                              <div className="mail-item-actions">
                                <button 
                                  onClick={() => {
                                    setCheckedIds([mail.id]);
                                    deleteCheckedMails();
                                  }}
                                  className="btn btn-white btn-sm text-danger btn-shadow btn-icon waves-effect"
                                  title="Delete"
                                >
                                  <i className="fi fi-rr-trash"></i>
                                </button>
                                {mail.tab !== "archive" && (
                                  <button 
                                    onClick={() => {
                                      setCheckedIds([mail.id]);
                                      archiveCheckedMails();
                                    }}
                                    className="btn btn-white btn-sm btn-shadow btn-icon waves-effect"
                                    title="Archive"
                                  >
                                    <i className="fi fi-rr-box"></i>
                                  </button>
                                )}
                              </div>
                            </div>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
