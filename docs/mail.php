<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'okama.production@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'ОКАМА.Нове повідомлення'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Им`я: '.$_POST['name'].'</p>
						<p>Пошта: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
						<p>Повідомлення: '.$_POST['formMessage'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <admin@okama.com.ua>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}