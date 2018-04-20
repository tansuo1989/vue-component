
# 用法：


* 安装：
<code> npm i vue-myarea </code>

* 使用：
```html
<template>

	<myarea @select="haha" pindex="1"><myarea>

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
1. 默认的省市区对应的属性：pindex，cindex，ddindex，对应的是选择后 pro，city，county 中的 index 的值
2. 如果后端需要对应的数据的话，可以使用 [这个文件](https://github.com/tansuo1989/vue-myarea/blob/master/src/vue-myarea/vue_myarea.sql)

# demo 请下载后运行：[网址](https://github.com/tansuo1989/vue-myarea)

# 更新说明：

[demo](https://tansuo1989.github.io/demo/myarea.html) 是之前的版本，数据也不是当前版本的。




