


async function testChat() {
    console.log("Testing AI Chat...");
    const start = Date.now();
    try {
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Hello, who are you?" })
        });

        const data = await response.json();
        console.log("Status:", response.status);
        console.log("Response:", data);
        console.log("Duration:", (Date.now() - start) + "ms");

        if (response.status === 200 && data.message && data.message.includes("YAS")) {
            console.log("SUCCESS: Identity verified as YAS.");
        } else if (response.status === 500) {
            console.log("FAILURE: Server Error 500.");
        } else {
            console.log("WARNING: Response received but identity might be wrong.");
        }

    } catch (e) {
        console.error("Fetch Error:", e);
    }
}

testChat();
