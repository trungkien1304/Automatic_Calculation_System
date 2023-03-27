<script type="text/javascript">
        function calculate(operator) {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var result;
            if (operator == '+') {
                result = parseFloat(num1) + parseFloat(num2);
            } else if (operator == '-') {
                result = num1 - num2;
            } else if (operator == '*') {
                result = num1 * num2;
            } else if (operator == '/') {
               if(num2 == 0){result="Không thể chia cho 0";}else{result = num1 / num2;}
            }
            document.getElementById("result").innerHTML = result;
        }
    </script>
