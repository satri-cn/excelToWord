<template>
	<div>
		<el-row>
			<!-- 左侧上传模块 - Excel文档 -->
			<el-col :span="12">
				<el-upload class="upload-excel" :action="$root.api.upload_excel" :show-file-list="false"
					:before-upload="beforeUploadExcel" @success="handleExcelSuccess">
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将 Excel 文件拖拽到此处，或点击上传</div>
				</el-upload>
			</el-col>

			<!-- 右侧上传模块 - Word文档 -->
			<el-col :span="12">
				<el-upload class="upload-word" :action="$root.api.upload_word" :show-file-list="false"
					:before-upload="beforeUploadWord" @success="handleWordSuccess">
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将 Word 文件拖拽到此处，或点击上传</div>
				</el-upload>
			</el-col>
		</el-row>

		<!-- 上传按钮 -->
		<el-button type="primary" :disabled="!isUploadButtonEnabled" @click="handleUpload">
			上传文件
		</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				excelFile: null,
				wordFile: null,
			};
		},
		computed: {
			isUploadButtonEnabled() {
				return this.excelFile !== null && this.wordFile !== null;
			},
		},
		methods: {
			beforeUploadExcel(file) {
				// 验证上传的文件类型为Excel
				const isExcel = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
				if (!isExcel) {
					this.$message.error('只能上传Excel文件');
				}
				return isExcel;
			},
			beforeUploadWord(file) {
				// 验证上传的文件类型为Word
				const isWord = file.type === 'application/msword' || file.type ===
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
				if (!isWord) {
					this.$message.error('只能上传Word文件');
				}
				return isWord;
			},
			handleExcelSuccess(response, file) {
				this.excelFile = file;
				console.log(file)
				this.$message.success('Excel 文件上传成功');
			},
			handleWordSuccess(response, file) {
				this.wordFile = file;
				console.log(file)
				this.$message.success('Word 文件上传成功');
			},
			handleUpload() {
				// 在这里实现上传到某个地址的逻辑
				// 例如，使用 axios 或其他方式上传文件到服务器
				this.$message.success('上传成功');
			},
		},
	};
</script>

<style scoped>
	.upload-excel,
	.upload-word {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		padding: 20px;
		text-align: center;
		background-color: #fafafa;
	}

	.el-upload__text {
		margin-top: 10px;
		color: #999;
	}

	.el-button {
		display: block;
		margin: 50px auto;
		padding: 10px 20px 10px 20px;
		font-size: 20px;
		font-weight: 900;
		letter-spacing: 2px;
	}
</style>