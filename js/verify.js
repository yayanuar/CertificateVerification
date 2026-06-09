function verifyCertificate(){

    const certID =
        document.getElementById("certificateID").value;

    if(certID === "1"){

        document
            .getElementById("resultBox")
            .classList.remove("hidden");

    }

    else{

        alert("Certificate Not Found");

        document
            .getElementById("resultBox")
            .classList.add("hidden");
    }
}