"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Configuration
    const countdownConfig = {
      endDate: new Date("2026-08-25T23:59:59").getTime(), // Set your target END DATE and TIME
      autoReset: true, // true = countdown will repeat infinitely, false = stop on completion
      cycleDurationDays: 10, // if autoReset is true, restart countdown for this many days
    };

    let { endDate, autoReset, cycleDurationDays } = countdownConfig;

    function updateCountdown() {
      const now = new Date().getTime();
      let distance = endDate - now;

      // Check if the countdown has finished
      if (distance <= 0) {
        if (autoReset) {
          const cycleDurationMs = cycleDurationDays * 24 * 60 * 60 * 1000;
          endDate = new Date(now + cycleDurationMs).getTime();
          distance = endDate - now;
        } else {
          setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
          clearInterval(timer);
          return;
        }
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-cover-wrapper min-vh-100">
      <div className="row g-0 min-vh-100">
        <div className="col-lg-6">
          <div className="coming-wrapper">
            <div className="maintenance-wrapper mb-5">
              <div className="mb-4">
                <Link href="/" aria-label="GXON logo">
                  <img className="visible-light" src="/assets/images/logo-full.svg" alt="GXON logo" />
                  <img className="visible-dark" src="/assets/images/logo-full-white.svg" alt="GXON logo" />
                </Link>
              </div>
              <div className="maintenance-status mb-2">Coming Soon</div>
              <h2 className="maintenance-heading text-primary mb-3">
                We’re Launching Soon. Thank You for Your Patience.
              </h2>
              <p className="maintenance-text mb-4 maxw-md-550px">
                Our website is coming soon, but we are ready to go! Special surprise for our subscribers only.
              </p>
              <form className="d-flex align-items-center maxw-md-450px position-relative" action="#">
                <i className="fi fi-rr-envelope position-absolute start-0 ms-4"></i>
                <input type="text" className="form-control form-control-lg rounded-5 ps-7" placeholder="Email Address" />
                <button type="button" className="btn btn-primary rounded-pill position-absolute end-0 waves-effect waves-light me-1">
                  Subscribe
                </button>
              </form>
            </div>
            <div id="countdown" className="countdown">
              <div className="count-item">
                <span className="time">{timeLeft.days}</span>
                <span className="text">Days</span>
              </div>
              <div className="count-item">
                <span className="time">{timeLeft.hours}</span>
                <span className="text">Hours</span>
              </div>
              <div className="count-item">
                <span className="time">{timeLeft.minutes}</span>
                <span className="text">Minutes</span>
              </div>
              <div className="count-item">
                <span className="time">{timeLeft.seconds}</span>
                <span className="text">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="coming-cover min-vh-100"
            style={{
              backgroundImage: "url(/assets/images/background/coming-soon.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
