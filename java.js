// scripts.js

// مثال على كيفية فتح نافذة الدردشة
function openChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
    if (chatBox.style.display === 'block') {
        chatBox.style.transform = 'rotateY(0deg)';
    }
}

// إرسال البيانات في نموذج الاتصال
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('تم إرسال الرسالة بنجاح!');
            this.reset();
        } else {
            alert('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
        }
    });
});
