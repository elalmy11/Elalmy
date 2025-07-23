<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>هاكر مود</title>
  <style>
    body {
      background-color: black;
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 18px;
      padding: 20px;
    }

    #output {
      white-space: pre-wrap;
    }

    .cursor {
      display: inline-block;
      width: 10px;
      background-color: #00ff00;
      animation: blink 0.7s infinite;
      margin-left: 2px;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  </style>
</head>
<body>
  <div id="output"></div><span class="cursor"></span>

  <script>
    const lines = [
      "جارٍ الاتصال بسيرفر العالمي...",
      "تم الدخول إلى قاعدة البيانات!",
      "جارٍ تحميل أدوات الاختراق...",
      "تشغيل النظام التجسسي...",
      "تم اختراق الهدف بنجاح ✅"
    ];

    const output = document.getElementById("output");
    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          output.textContent += lines[lineIndex][charIndex];
          charIndex++;
          setTimeout(typeLine, 50);
        } else {
          output.textContent += "\n";
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, 500);
        }
      }
    }

    typeLine();
  </script>
</body>
</html>