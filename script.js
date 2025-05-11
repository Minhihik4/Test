document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const fullNameInput = document.getElementById('fullName');
    const studentIdInput = document.getElementById('studentId');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const majorSelect = document.getElementById('major');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const avatarInput = document.getElementById('avatar');
    const avatarPreview = document.getElementById('avatarPreview');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    // Xử lý preview ảnh đại diện
    avatarInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatarPreview.innerHTML = `<img src="${e.target.result}" alt="Avatar Preview">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Xử lý submit form
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrorMessages();
        successMessage.textContent = '';
        
        if (validateForm()) {
            successMessage.textContent = 'Dữ liệu hợp lệ, đang gửi...';
            // Gửi dữ liệu form ở đây
        }
    });
    
    function clearErrorMessages() {
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
    }
    
    function validateForm() {
        let isValid = true;
        
        if (!fullNameInput.value.trim()) {
            document.getElementById('fullNameError').textContent = 'Vui lòng nhập họ tên';
            isValid = false;
        }
        
        if (!studentIdInput.value.trim()) {
            document.getElementById('studentIdError').textContent = 'Vui lòng nhập mã số sinh viên';
            isValid = false;
        }
        
        if (!document.querySelector('input[name="gender"]:checked')) {
            document.getElementById('genderError').textContent = 'Vui lòng chọn giới tính';
            isValid = false;
        }
        
        if (!majorSelect.value) {
            document.getElementById('majorError').textContent = 'Vui lòng chọn ngành học';
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('emailError').textContent = 'Email không hợp lệ';
            isValid = false;
        }
        
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            document.getElementById('phoneError').textContent = 'Số điện thoại phải có 10 chữ số';
            isValid = false;
        }
        
        return isValid;
    }
});
// Thêm vào phần DOMContentLoaded
const resetBtn = document.getElementById('resetBtn');

// Xử lý sự kiện reset
resetBtn.addEventListener('click', function() {
    clearErrorMessages();
    successMessage.textContent = '';
    avatarPreview.innerHTML = '';
});