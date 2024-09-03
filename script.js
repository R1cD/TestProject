document.getElementById('convertBtn').addEventListener('click', function() {
        const input = document.getElementById('input').value;
        const result = document.getElementById('result');

        // 检查输入是否为时间戳
        if (!isNaN(input)) {
             const date = new Date(parseInt(input));
             result.textContent = date.toString();
        } else {
             const timestamp = new Date(input).getTime();
             result.textContent = timestamp ? timestamp : '无效的时间';
        }
    });