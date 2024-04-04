// https://assignment-2-backend.onrender.com/register

document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    // const status = formData.get('status');
    // let fee = '';
    // switch (status) {
    //     case 'student':
    //         fee = '$10';
    //         break;
    //     case 'staff':
    //         fee = '$50';
    //         break;
    //     case 'volunteer':
    //         fee = 'Free';
    //         break;
    //     default:
    //         fee = 'Invalid Status';
    // }

    let register = {};
    register.id = formData.get('id');
    register.fullName = formData.get('fullname')
    register.address = formData.get('address')
    register.status = formData.get('status')

    fetch('https://assignment-2-backend.onrender.com/register', {
    //fetch('http://localhost:5600/register', {
        method: 'POST',
        body: JSON.stringify(register),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById('id').textContent = `ID: ${data.id}`;
            document.getElementById('fullname').textContent = `Full Name: ${data.fullName}`;
            document.getElementById('address').textContent = `Address: ${data.address}`;
            document.getElementById('status').textContent = `Status: ${uppercase(data.status)}`;
            document.getElementById('fee').textContent = `Registration Fee: ${data.price}`;
            document.getElementById('confirmation').style.display = 'block';
        });

    // document.getElementById('id').textContent = `ID: ${formData.get('id')}`;
    // document.getElementById('fullname').textContent = `Full Name: ${formData.get('fullname')}`;
    // document.getElementById('address').textContent = `Address: ${formData.get('address')}`;
    // document.getElementById('status').textContent = `Status: ${status}`;
    // document.getElementById('fee').textContent = `Registration Fee: ${fee}`;
    // document.getElementById('confirmation').style.display = 'block';
});

function uppercase(s){
    return s[0].toUpperCase() + s.slice(1); 
}