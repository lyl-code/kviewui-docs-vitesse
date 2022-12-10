import {
    reactive,
    ref,
    toRefs,
  } from 'vue'

  import { compress, isImage } from '../../../common/utils/image'
  import type { ImageFile } from '@/components/global/d.uniapp/chooseImage'

  export default {
    setup() {
      const url = 'https://kviewui-api.vercel.app/file/upload/add'

      const beforeUploadValue = ref([])

      const toastState = reactive({
        show: false,
        content: '',
      })

      /**
                   * @zh 上传前置处理，H5环境演示上传前图片压缩，非H5环境演示上传前图片格式校验
                   * @@return {Promise}
                   * @description 上传前置处理函数，H5环境演示上传前图片压缩，
                   * 	非H5环境演示上传前图片格式校验，promise最后要返回类型file[]文件数组
                   *
                   */
      const onBeforeUpload = async (file: ImageFile[]) => {
        return new Promise((_res, _rej) => {
          // #ifdef H5
          const compressBeforeSize = file[0].size
          compress(file[0]).then((res) => {
            toastState.content = `压缩前大小：${compressBeforeSize}字节\n压缩后大小：${res.size}字节`
            console.log(toastState.content)
            toastState.show = true
            _res([res])
          })
          // #endif
          // #ifndef H5
          if (!isImage(file[0].path)) {
            toastState.content = '图片格式错误'
            toastState.show = true
            _rej(false)
          }
          _res(file)
          // #endif
        })
      }

      return {
        ...toRefs({
          beforeUploadValue,
        }),
        toastState,
        url,
        onBeforeUpload,
      }
    },
  }
