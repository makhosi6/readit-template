let latest = document.querySelector('.latest-footer');
let arrr = [23,45];
(()=>{
	// console.log("log");
	arrr.map((o)=>{

		latest.innerHTML += `<div class="block-21 mb-4 d-flex">
		<a class="img mr-4 rounded" style="background-image: url(images/image_1.jpg);"></a>
		<div class="text">
			<h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
			<div class="meta">
				<div>
					<a href="#"></span> Oct. 16, 2019</a>
				</div>
				<!--<div>
					<a href="#"></span> Num: ${o}</a>
				</div>
				<div>
					<a href="#"></span> 19</a>
				</div>-->
			</div>
		</div>
	</div>`;
	});
	
console.log(1997);

})();