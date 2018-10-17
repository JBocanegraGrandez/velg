import React from 'react';
const BusinessShowBot = ({business}) => (
  <div className="business-show-bot-container">
    <div className="hours-container">
      <div className="today">
        <div className="icon-today">Icon</div>
        <div className="time-today">
          <span className="key">Today</span>
          <span className="value">5:00 pm - 9:30 pm</span>
        </div>
      </div>
      <div className="price-range-side">
        <div className="icon-today">Icon</div>
        <div className="time-today-2">
          <span className="key">Price Range</span>
          <span className="value">$11-30</span>
        </div>
      </div>
    </div>
    <div className="dates-details-container">
    <div className="dates-container">
      <h3>Hours</h3>
      <table class="hour-table">
        <tbody>
          <tr><th>Mon</th><td><span>5:00 pm</span>&nbsp;-&nbsp;<span>9:30 pm</span></td></tr>
          <tr><th>Tue</th><td><span>5:00 pm</span>&nbsp;-&nbsp;<span>9:30 pm</span></td></tr>
          <tr><th>Wed</th><td><span>5:00 pm</span>&nbsp;-&nbsp;<span>9:30 pm</span></td></tr>
          <tr><th>Thu</th><td><span>5:00 pm</span>&nbsp;-&nbsp;<span>9:30 pm</span></td></tr>
          <tr><th>Fri</th><td><span>11:30 am</span>&nbsp;-&nbsp;<span>2:30 pm</span></td></tr>
          <tr><th>Sat</th><td><span>11:30 am</span>&nbsp;-&nbsp;<span>2:30 pm</span></td></tr>
          <tr><th>Sun</th><td><span>5:00 pm</span>&nbsp;-&nbsp;<span>9:30 pm</span></td></tr>
        </tbody>
      </table>
    </div>
    <div className="business-details">
      <h3>More business info</h3>
      <ul>
        <li>Delivery </li>
        <li>Takeout </li>
        <li>Outdoor Seating </li>
        <li>Dogs Allowed </li>
        <li>Full bar </li>
        <li>Breakfast </li>
        <li>Lunch </li>
        <li>Dinner </li>
        <li>Brunch </li>
        <li>Gender Neutral Restrooms</li>
      </ul>
    </div>
  </div>
  </div>
);

export default BusinessShowBot;
