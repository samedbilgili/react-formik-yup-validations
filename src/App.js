import React, { useState } from 'react';

import TalwindContactTemplate from './TalwindContactTemplate/index'
import BasicContactTemplate from './components/BasicRegisterTemplate/index'
const App = () => {
  const [showBasicTemplate, setShowBasicTemplate] = useState(false);

  return (
    <>
      <div className='changeTemplateButton' onClick={() => { setShowBasicTemplate(!showBasicTemplate) }}> {showBasicTemplate ? 'Show Talwind Template' : 'Show Basic Template'}  </div>

      {showBasicTemplate ? <BasicContactTemplate /> : <TalwindContactTemplate />}
    </>
  );
};

export default App;