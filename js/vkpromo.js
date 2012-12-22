$(document).ready(function() {
	var tourSteps = {
		"1" : [
			"Доступ к данным при отсутствии интернета",
			"Вы всегда сможете найти нужного вам человека или письмо даже когда соединение с интернетом отсутствует или нестабильно. Для этого приложение полностью синхронизирует список ваших собеседников и сообщения ВКонтакте в процессе своей работы.|Не бойтесь того, что соединение с интернетом пропадет - телефоны знакомых и дни рождения друзей будут всегда под рукой."
		], "2" : [
			"Приложение работает при закрытом браузере",
			"Даже когда все окна Google Chrome закрыты, приложение уведомит вас о поступившем сообщении или о наступившем дне рождения вашего друга. Для этого используется возможность работы приложения в фоне, которая позволяет узнать о новых сообщениях и событиях практически мгновенно.|Занимайтесь важными делами и не беспокойтесь, что важное сообщение пройдет незамеченным."
		], "3" : [
			"Поддержка нескольких аккаунтов ВКонтакте",
			"Внешне это работает аналогично <a target='_blank' href='http://support.google.com/accounts/bin/answer.py?hl=ru&answer=1721977'>Google Multiple Sign-in</a>, когда есть один активный аккаунт, для которого синхронизация происходит в реальном времени.|Переключиться на другой аккаунт можно на странице настроек приложения. Вы можете добавить неограниченное количество аккаунтов."
		], "4" : [
			"Голосовой ввод текста писем",
			"Да, вы можете не вводить текст письма на клавиатуре, а проговорить его, после чего технология Google Voice Search его распознает и преобразует в текст.|Вскоре в приложении появятся видео- и аудиописьма, которые будут работать без сторонних плагинов (Flash, Silverlight, etc).",
			"Чтобы приблизить это светлое будущее, перейдите по ссылкам и кликните на звездочки в левых верхних частях этих страниц. Это подскажет разработчикам Chromium, что много людей ждут, когда эта возможность появится в браузере."
		], "5" : [
			"Все, к чему вы привыкли в E-mail переписке",
			"Важные сообщения, к которым легко получить доступ, удаление сообщений с последующей возможностью их восстановления, собственные метки и черновики - все это есть в %appname%.|Мы объединили легкость и простоту диалогов ВКонтакте с удобными и привычными функциями любого E-mail клиента."
		], "6" : [
			"Полный контроль над данными",
			"Все данные хранятся локально. Это означает, что контакты, метки и принятые сообщения никуда не посылаются, а хранятся в базе данных у вас на компьютере.|При установке приложение запрашивает у вас доступ к сайтам *.vk.com и *.userapi.com - через них приложение синхронизирует ваши данные."
		]
	};

	$.fn.tourStep = function(num) {
		var contentElem = this,
			STEPSNUM = 6,
			headerElem = $("<h1>").html(tourSteps[num][0]),
			descriptionText = tourSteps[num][1],
			descriptionElems = [],
			mediaElems = [],
			sectionData = $("<div>").addClass("data"),
			tourBtnTerm = (num === STEPSNUM) ? "Смотреть снова" : "Дальше",
			btnTour = $("<button>").attr("type", "button").html(tourBtnTerm).addClass("white"),
			btnAuth = $("<button>").attr("type", "button").html("Установить сейчас").addClass("green"),
			btnLike = $("<div>").css({display: "inline-block", "vertical-align" : "middle", "margin-left" : "12px"}).attr("id", "vk_like"),
			buttonsSection = $("<div>").addClass("buttons in-tour"),
			smallDescription, linksList, iframeElem,
			imgElem1, imgElem2;

		switch (num) {
			case 1 :
				imgElem1 = $("<img>").attr({"width" : 500, "height" : 359, "alt" : "", "src" : "http://img-fotki.yandex.ru/get/6301/38295944.32/0_69c8b_b0235f7a_orig"});
				mediaElems.push(imgElem1);
				break;

			case 2 :
				imgElem1 = $("<img>").attr({"width" : 500, "height" : 362, "alt" : "", "src" : "http://img-fotki.yandex.ru/get/6305/38295944.32/0_69c8d_c40203af_orig"});
				mediaElems.push(imgElem1);
				break;

			case 3 :
				imgElem1 = $("<img>").attr({"width" : 500, "height" : 372, "alt" : "", "src" : "http://img-fotki.yandex.ru/get/6211/38295944.32/0_69c8c_429fc35a_orig"});
				mediaElems.push(imgElem1);
				break;

			case 4 :
				iframeElem = $("<iframe>").attr({"frameborder" : 0, "width" : 500, "height" : 284, "src" : "http://www.youtube.com/embed/QtFJtvC4hOQ", "seamless" : true});
				mediaElems.push(iframeElem);

				imgElem1 = $("<img>").attr({"width" : 500, "height" : 176, "alt" : "", "src" : "http://img-fotki.yandex.ru/get/6308/38295944.32/0_69c8e_3b5d837_orig"});
				mediaElems.push(imgElem1);
				break;

			case 5 :
				imgElem1 = $("<img>").attr({"width" : 500, "height" : 216, "alt" : "", "src" : "http://img-fotki.yandex.ru/get/6303/38295944.33/0_69cb0_a8e7b3c0_orig"});
				mediaElems.push(imgElem1);

				imgElem2 = $("<img>").attr({"width" : 500, "height" : 193, "alt" : "", "src" : "http://img-fotki.yandex.ru/get/6110/38295944.32/0_69cad_a092b7ba_orig"});
				mediaElems.push(imgElem2);
				break;

			case 6 :
				imgElem1 = $("<img>").attr({"width" : 500, "height" : 309, "alt" : "", "src" : "http://img-fotki.yandex.ru/get/6301/38295944.32/0_69c7b_f16056a2_orig"});
				mediaElems.push(imgElem1);
				break;
		}

		if (num === STEPSNUM) {
			btnTour.data("step", 1).removeClass("first");
			buttonsSection.append(btnTour, btnAuth, btnLike);
		} else {
			btnTour.data("step", num + 1);
			buttonsSection.append(btnAuth, btnTour, btnLike);
		}

		descriptionText.split("|").forEach(function(paraText) {
			paraText = paraText.replace("%appname%", "VK Offline");

			var paraElem = $("<p>").html(paraText);
			descriptionElems.push(paraElem);
		});

		if (num === 4) {
			smallDescription = $("<p>").html(tourSteps[num][2]).addClass("small");
			linksList = $("<ul>").html("<li><a target='_blank' href='http://code.google.com/p/chromium/issues/detail?id=113676'>issue #113676</a></li><li><a target='_blank' href='http://code.google.com/p/chromium/issues/detail?id=112367'>issue #112367</a></li>");

			smallDescription.append(linksList);
			descriptionElems.push(smallDescription);
		}

		sectionData.append.apply(sectionData, mediaElems.concat(descriptionElems));
		contentElem.empty().append(headerElem, sectionData, buttonsSection);

		VK.Widgets.Like("vk_like", {type: "mini", height: 24, pageTitle: "Приложение VK Offline для Google Chrome", pageDescription: "VK Offline - это приложение для Google Chrome, которое объединяет легкость и простоту диалогов ВКонтакте с удобными и привычными функциями любого E-mail клиента и адресной книги. Приложение бесплатно, устанавливается в браузер из Chrome Web Store и предоставляет доступ к вашим контактам и переписке даже при отсутствии интернета.", text: "Легкость и простота диалогов ВКонтакте с удобными и привычными функциями любого E-mail клиента и адресной книги", pageImage: "http://img-fotki.yandex.ru/get/53/38295944.33/0_6c4fd_659c045b_orig.jpg"})
	};

	$(document).on("click", "#content button.green", function() {
		var self = $(this);

		if (window.chrome === undefined || window.chrome.webstore === undefined) {
			alert("Приложение устанавливается только в браузеры на базе Chromium. Установите Google Chrome, чтобы использовать VK Offline.");
		} else {
			self.html("Подождите...");

			chrome.webstore.install(undefined, function() {
                                self.html("Установить сейчас");
                        }, function() {
                                self.html("Установить сейчас")
                        });
		}
	});

	$(document).on("click", "#content button.white", function() {
		var step = parseInt($(this).data("step"), 10);
		$("#promodata").tourStep(step);
	});
});

