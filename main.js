function generatePDF() {

    const productName = document.getElementById('product-name').value;
    const clientName = document.getElementById('client-name').value;
    const clientContactInfo = document.getElementById('client-contact-info').value;
    const intendedUsage = document.getElementById('intended-usage').value;
    const finalShots = document.getElementById('final-shots').value;
    const format = document.getElementById('format').value;
    const orientation = document.getElementById('orientation').value;
    const lighting = document.getElementById('lighting').value;
    const cameraAngles = document.getElementById('camera-angles').value;
    const cameraPerspective = document.getElementById('camera-perspective').value;
    const lightingAddons = document.getElementById('lighting-addons').value;
    const behindTheScenes = document.getElementById('behind-the-scenes').value;
  
    const documentDefinition = {
        pageSize: {
            width: 500,
            height: 'auto'
          },

        
            


      content: [

        {
            text: 'Product Photography Brief',
            style: 'header'
          },
          {
            text: 'Please see specifications for product photography below.',
            style: 'subheader',
            margin: [0, 10, 0, 30]
          },

        { text: 'Product Name: ' + productName },
        { text: 'Client Name: ' + clientName },
        { text: 'Client Contact Info: ' + clientContactInfo },
        { text: 'Intended Usage: ' + intendedUsage },
        { text: 'Number of Final Shots Required: ' + finalShots },
        { text: 'Format of Photos: ' + format },
        { text: 'Orientation: ' + orientation },
        { text: 'Lighting: ' + lighting },
        { text: 'Camera Angles: ' + cameraAngles },
        { text: 'Camera Perspective: ' + cameraPerspective },
        { text: 'Lighting Add-ons: ' + lightingAddons },
        { text: 'Behind the Scenes: ' + behindTheScenes },

        {
            text: 'Built using Product Photography Brief Builder - An online tool to streamline product photography sessions which breaks down art direction into actionables that are exported as printable PDFs. Final project submission for T&I Spring 2023 by Hamza Iqbal',
            style: 'subheader',
            margin: [0, 10, 0, 30]
          },

      ]
    };
  
    pdfMake.createPdf(documentDefinition).open();
  }
  
  const generatePDFButton = document.getElementById('generate-pdf');
  generatePDFButton.addEventListener('click', generatePDF);
  