import './App.css';
import Sidebar from './Components/ProSidebar/ProSidebar';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './message';
import './styles/App.scss';
import { useState } from 'react';

function App() {
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
