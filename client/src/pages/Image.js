import Layout from '../components/Layout/Layout.js';
import React, { useState } from 'react';

function PrescriptionUpload() {
  const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a prescription image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('prescription', file);

        try {
            const response = await fetch('/api/upload-prescription', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Prescription image uploaded successfully.');
            } else {
                alert('Prescription upload failed.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <Layout>
            <div>
                <h1>Upload Prescription</h1>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload Prescription</button>
            </div>
        </Layout>
    );
}

export default PrescriptionUpload;
