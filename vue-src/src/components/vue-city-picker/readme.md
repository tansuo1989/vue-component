
# 用法：


* 安装：
<code> npm i tansuo-city-picker </code>

* 使用：
```html
<template>

	<city-picker @select="haha" pindex="1"><city-picker>

</template>

<script>
	methods:{
		haha:function(d){
			console.log(d);
		}
	}	
</script>	
```

# 说明：
1. 默认的省市区对应的属性：pindex，cindex，ccindex，对应的是选择后 pro，city，county 中的 index 的值
2. 如果后端需要对应的数据的话，可以使用 [这个文件](https://github.com/tansuo1989/vue-component/blob/master/doc/vue_myarea.sql)

# demo 请下载后运行：[网址](https://github.com/tansuo1989/vue-myarea)





