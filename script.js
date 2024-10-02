document.getElementById('requirementForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const requirements = document.getElementById('requirements').value;

    try {
        const response = await fetch('/api/generate-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ requirements })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('generatedCode').textContent = result.code;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('generatedCode').textContent = 'Error generating code.';
    }
});
