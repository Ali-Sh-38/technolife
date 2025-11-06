import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import ScrollToTop from './custom hook/ScrollToTop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop/>
      <App/>
    </Router>
  </StrictMode>
)

// نکته
// برای اینکه وقتی وارد صفحه جدیدی شویم و صفحه دوباره رندر شود باید از یوزلوکیشن استفاده کنیم 
// که شرط استفاده از ان این است که داخل تگ روتر باشد 
//  برای همین لینک ها را به کامپوننت اپ انتقال داده و اپ را داخل روتر میگذاریم