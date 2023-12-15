// select2
// $(document).ready(function() {
//   $("#sel_item1").select2();
//   $("#sel_item2").select2();
//   $("#sel_item3").select2();
//   $("#sel_item4").select2();
//   $("#sel_item5").select2();
//   $("#sel_item6").select2();
//   $("#sel_item7").select2();
//   $("#sel_item8").select2();
// });

// datetable
// jQuery(document).ready(function () {
//   jQuery('#datetable1').DataTable();
//   jQuery('#datetable2').DataTable();
//   jQuery('#datetable3').DataTable();
//   jQuery('#datetable4').DataTable();
//   jQuery('#datetable5').DataTable();
// });

// month-picker
var options = {
  pattern:'yyyy-mm',
  defaultDate: new Date(),
  selectedYear: 2023, // 초기 선택 연도
  startYear: 2008,   // 허용 시작 연도
  finalYear: 2300,   // 허용 종료 연도
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월',],
  openOnFocus: false // 포커스 시 자동 열림 비활성화
};


$('#form-picker1').monthpicker(options);
  $('#form-picker1-button').bind('click', function () {
    $('#form-picker1').monthpicker('show');
});

$('#form-picker2').monthpicker(options);
  $('#form-picker2-button').bind('click', function () {
    $('#form-picker2').monthpicker('show');
});



jQuery(document).ready(function () {
  var dataTableIds = ['#datetable1', '#datetable2', '#datetable3', '#datetable4', '#datetable5'];

  dataTableIds.forEach(function(id) {
    jQuery(id).DataTable({
      paging: false,
      pageLength: 1000,
    });
  });
});


// Menu Trigger
$('#menuToggle').on('click', function(event) {
	var windowWidth = $(window).width();   		 
	if (windowWidth<1010) { 
		$('body').removeClass('open'); 
		if (windowWidth<768){ 
			$('#left-panel').slideToggle(); 
		} else {
			$('#left-panel').toggleClass('open-menu');  
		} 
	} else {
		$('body').toggleClass('open');
		$('#left-panel').removeClass('open-menu');  
	} 
		 
}); 

// Counter Number
// $('.count').each(function () {
//   var $this = $(this);
//   var countTo = $this.text().replace(/,/g, ''); // Remove existing commas
//   $({ Counter: 0 }).animate({
//     Counter: countTo
//   }, {
//     duration: 3000,
//     easing: 'swing',
//     step: function (now) {
//       $this.text(commaSeparateNumber(Math.ceil(now))); // Call commaSeparateNumber() to add commas
//     }
//   });
// });

// function commaSeparateNumber(number) {
// return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }



// // tootlp-list
// jQuery(document).ready(function() {
//   jQuery('.tbn-tootlp').popover({
//       container: 'body'
//   });
// });
// function closeAlert(event) {
//   event.preventDefault(); // 기본 동작 중단
//   event.stopPropagation(); // 이벤트 전파 중단
//   const alert = event.target.closest('.sufee-alert');
//   alert.style.display = 'none';
//   checkNotificationCount();
// }

// function clearNotifications(event) {
//   event.preventDefault(); // 기본 동작 중단
//   event.stopPropagation(); // 이벤트 전파 중단
//   const alerts = document.querySelectorAll('.sufee-alert');
//   alerts.forEach(alert => alert.style.display = 'none');
//   checkNotificationCount();
// }

// function checkNotificationCount() {
//   const notificationText = document.getElementById('notificationText');
//   const alerts = document.querySelectorAll('.sufee-alert');
//   if (alerts.length === 0) {
//       notificationText.style.display = 'block';
//   } else {
//       notificationText.style.display = 'none';
//   }
// }

// // 페이지 로딩 시 알림 개수 확인
// window.addEventListener('DOMContentLoaded', checkNotificationCount);


// datepicker-ko 
$(function() {
  $("#datepicker1").datepicker();
  $("#datepicker2").datepicker();
  $("#datepicker3").datepicker();
  $("#datepicker4").datepicker();
  $("#datepicker5").datepicker();
  $("#datepicker6").datepicker();
  $("#datepicker7").datepicker();
  $("#datepicker8").datepicker();
  $("#datepicker9").datepicker();
  $("#datepicker10").datepicker();
});

$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년'
});



//menu toggle 
$(".menu-item-has-children.dropdown").each(function() {
	$(this).on('click', function() {
		var $temp_text = $(this).children('.dropdown-toggle').html();
		$(this).children('.sub-menu').prepend('<li class="subtitle">' + $temp_text + '</li>'); 
	});
});


// Load Resize 
$(window).on("load resize", function(event) { 
	var windowWidth = $(window).width();  		 
	if (windowWidth<1010) {
		$('body').addClass('small-device'); 
	} else {
		$('body').removeClass('small-device');  
	} 
	
});






/*숫자 콤마*/
$(document).ready(function () {
  // 특정 클래스를 가진 요소 선택
  $(".form-count").each(function () {
    var numericValue = parseFloat($(this).find('.td-inner-green, .td-inner-red, .count_Sum').text()); // <div> 요소의 텍스트를 숫자로 변환
    if (!isNaN(numericValue)) {
      var formattedValue = formatNumberWithCommas(numericValue); // 포맷 함수 사용
      $(this).find('.td-inner-green, .td-inner-red, .count_Sum').text(formattedValue); // <div> 요소의 텍스트를 포맷된 숫자로 업데이트
    }
  });
});

// 숫자를 콤마로 구분하여 포맷하는 함수
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




 // 오늘 날짜를 가져오는 함수
 //    function getTodayDate() {
 //        const today = new Date();
 //        const year = today.getFullYear();
 //        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 포맷합니다.
 //        const day = today.getDate().toString().padStart(2, '0'); // 일을 2자리로 포맷합니다.
 //        return `${year}-${month}-${day}`;
 //    }

 //    // 시작 날짜와 종료 날짜 input 요소에 오늘 날짜를 설정
 //    document.getElementById("startDate").value = getTodayDate();
 //    document.getElementById("endDate").value = getTodayDate();



// 현재 달의 1일을 가져오는 함수
function getFirstDayOfCurrentMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 포맷합니다.
    return `${year}-${month}-01`;
}

// 현재 달의 30일을 가져오는 함수
function getLastDayOfCurrentMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 포맷합니다.
    return `${year}-${month}-30`;
}

// 시작 날짜와 종료 날짜 input 요소에 현재 달의 1일과 30일을 설정
document.getElementById("startDate").value = getFirstDayOfCurrentMonth();
document.getElementById("endDate").value = getLastDayOfCurrentMonth();
