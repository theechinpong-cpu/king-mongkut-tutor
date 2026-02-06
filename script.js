const questions = [
    { q: "1. 25 x 4 เท่ากับเท่าไหร่?", options: ["80", "90", "100", "110"], answer: 2 },
    { q: "2. ห.ร.ม. ของ 12 และ 18 คืออะไร?", options: ["2", "3", "6", "9"], answer: 2 }
];

const container = document.getElementById('quiz-container');

// แสดงข้อสอบ
questions.forEach((item, index) => {
    let html = `<div class="mb-6 p-4 border rounded">
        <p class="font-semibold mb-2">${item.q}</p>`;
    item.options.forEach((opt, i) => {
        html += `<label class="block mb-1">
            <input type="radio" name="q${index}" value="${i}" class="mr-2"> ${opt}
        </label>`;
    });
    html += `</div>`;
    container.innerHTML += html;
});

function submitExam() {
    let score = 0;
    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.answer) {
            score++;
        }
    });

    alert(`คุณได้คะแนน ${score} / ${questions.length}`);
    sendToLine(score);
}

function sendToLine(score) {
    // ตรงนี้เราจะเชื่อมต่อกับ LINE API ต่อไป
    console.log("กำลังส่งคะแนนเข้า LINE...");
}
