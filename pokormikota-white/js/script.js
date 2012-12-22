$(document).ready(function () {
	/* var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	var p;

	for (var i = 0; i < 20; i++) {
		p = document.createElement("p");
		p.innerHTML = text;
		document.getElementById("content").appendChild(p);
	} */

	var orderProductsForm = $("#content table.order-products");
	if (orderProductsForm.length) {
		// второй шаг оформления покупки
		orderProductsForm.find("td.b-price button").click(function () {
			$(this).css("visibility", "hidden");
			orderProductsForm.find("th a.xhr").click();

			orderProductsForm.find("tr").each(function () {
				var tableRow = $(this);
				var input = tableRow.find("input[type='number']");

				if (input.length === 0)
					return;

				input.parent().html(input.val());
				tableRow.find("a.xhr").css("visibility", "hidden");
			});

			var orderAddress = $("#content div.b-address").removeClass("hidden");
			$("html, body").animate({
				scrollTop: orderAddress.offset().top
			}, 500);

			$(".order-address button").click(function () {
				var el = $(this);
				el.attr("disabled", "disabled").html("Подождите...");

				setTimeout(function () {
					location.href = "./ordered.html";
				}, 1000);
			})
		});

		// смена количества, пересчет стоимости
		var onInputChangedValue = function () {
			var itog = orderProductsForm.find("td.b-price b");
			var sum = 0;

			orderProductsForm.find("input[type='number']").each(function () {
				sum += parseInt($(this).val(), 10) || 0;
			});

			itog.html(sum);
		};

		orderProductsForm.find("input[type='number']").keyup(onInputChangedValue);
		orderProductsForm.find("input[type='number']").change(onInputChangedValue);

		// нет спасибо
		orderProductsForm.find("th a.xhr").click(function () {
			$(this).closest("tr").remove();
			orderProductsForm.find("tr.also").remove();
		});
	}

	var marketMenu = $("#market-menu");
	if (marketMenu.length) {
		marketMenu.find("a").click(function () {
			var products = $("#products");
			products.html("<img src='./pics/loading.gif' width='16' height='11'>");

			var tpl = '<div class="i-block product"> \
				<div class="title alignCenter"> \
					<a href="#" title="">{title}</a><br> \
					<span>{description}</span> \
				</div> \
				<a title="подробнее" class="block alignCenter" href="#"><img width="156" height="156" alt="" src="http://pokormikota.ru/s/pic/products/{id}_th.jpeg"></a> \
				<div class="price"> \
					<div> \
						<span class="i-block weight">{weight}</span> \
						<span class="i-block ruprice"><b>{price}</b> руб</span> \
						<div class="i-block alignRight order"><a class="xhr" href="javascript:;">заказать</a></div> \
					</div> \
				</div> \
			</div>';

			var rand = Math.round(Math.random() * 100);
			var newHTML = '';

			$.getJSON("http://pokormikota.ru:5984/pokormikota_products/_all_docs?skip=" + rand + "&limit=10&include_docs=true&callback=?", function (json) {
				json.rows.forEach(function (rowData) {
					newHTML += tpl
								.replace("{title}", rowData.doc.title)
								.replace("{description}", rowData.doc.description)
								.replace("{id}", rowData.id)
								.replace("{weight}", rowData.doc.weight)
								.replace("{price}", rowData.doc.price);
				});

				products.html(newHTML);
			});

			$(this).toggleClass("selected");
			return false;
		});

		// 
	}
});
