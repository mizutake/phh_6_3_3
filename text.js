document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let name = document.getElementById('name');
        let result = document.getElementById('result');
        //result.innerHTML = 'こんにちは、' + name.value + 'さん!';
        result.textContent = 'こんにちは、' + name.value + 'さん!';
    }, false);
},false);

//<div onclick="anert('首を出せ')">山の翁</div>