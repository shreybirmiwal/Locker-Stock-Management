import { useState } from 'react';
import QRCode from 'react-qr-code';

function QR() {
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(256);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 w-full">
    <div className="w-full max-w-xl p-4">
    <div className="flex flex-col items-center justify-center h-scree">
      <QRCode
        value="https://locker-stock-management.onrender.com/"
        bgColor={back}
        fgColor={fore}
        size={size === '' ? 0 : size}
        className="mb-4"
      />

      <p className="text-lg text-gray-800">
        Print this QR code and leave it by the locker to link to this website!
      </p>
    </div>
    </div>
    </div>
  );
}

export default QR;
