
# 用法：


* 安装：
<code> npm i vue-myarea </code>

* 使用：

	&lt;template&gt;

	&lt;myarea @select="haha"&gt;&lt;myarea&gt;

	&lt;/template &gt;


	<code>
	&lt;script&gt;

		methods:{
			haha:function(d){
				console.log(d);
			}
		}	
	&lt;/script&gt;	
	</code>



