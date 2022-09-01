import React, { useState } from 'react'

const bannerTypes = {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info'
}

export default function NotificationBanner({ type, message }) {

  return (
    <div className={`notification-banner ${bannerTypes[type]}`}>
        <div className="banner-header"></div>
        <div className="banner-message">{message}</div>
    </div>
  )
}
