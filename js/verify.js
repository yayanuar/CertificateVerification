const certificates = [
    {
        id: "CERT-2026-0001",
        name: "John Doe",
        course: "Blockchain Security",
        issuer: "UPM",
        issueDate: "01 Jan 2026",
        expiryDate: "01 Jan 2028",
        status: "VALID",
        txHash: "0x7a3f92bc4e1d8f6a91"
    },
    {
        id: "CERT-2026-0002",
        name: "Ali Ahmad",
        course: "Cyber Security",
        issuer: "UPM",
        issueDate: "15 Feb 2026",
        expiryDate: "15 Feb 2028",
        status: "VALID",
        txHash: "0x8d2c76ab9f3e1245aa"
    },
    {
        id: "CERT-2026-0003",
        name: "Siti Nur",
        course: "Network Security",
        issuer: "UPM",
        issueDate: "20 Mar 2026",
        expiryDate: "20 Mar 2027",
        status: "REVOKED",
        txHash: "0x4f6b91de7a2219bc33"
    }
];

function verifyCertificate() {

    const certID = document
        .getElementById("certificateID")
        .value
        .trim()
        .toUpperCase();

    const certificate = certificates.find(
        cert => cert.id === certID
    );

    if (!certificate) {

        alert("Certificate Not Found");

        document
            .getElementById("resultBox")
            .classList.add("hidden");

        return;
    }

    let statusColor = "green";

    if (certificate.status === "REVOKED") {
        statusColor = "red";
    }

    document.getElementById("resultBox").innerHTML = `

        <h2>Certificate Details</h2>

        <p><strong>Name:</strong> ${certificate.name}</p>

        <p><strong>Certificate ID:</strong>
        ${certificate.id}</p>

        <p><strong>Course:</strong>
        ${certificate.course}</p>

        <p><strong>Issued By:</strong>
        ${certificate.issuer}</p>

        <p><strong>Issue Date:</strong>
        ${certificate.issueDate}</p>

        <p><strong>Expiry Date:</strong>
        ${certificate.expiryDate}</p>

        <p><strong>Blockchain Transaction:</strong><br>
        ${certificate.txHash}</p>

        <div class="verified"
            style="background:${statusColor};">
            ${certificate.status}
        </div>

    `;

    document
        .getElementById("resultBox")
        .classList.remove("hidden");
}