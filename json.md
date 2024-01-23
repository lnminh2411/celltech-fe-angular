data: 
	settingForm: id:id của form, name: tên của form, tableId: id của bảng chứa dữ liệu của form, tableName: tên của bảng chứa, setting[]: chứa những thông tin chi tiết
		setting: formLayout[]: Các thẻ input trong form, actionLayout[]: các nút bấm của form
			formLayout[15]: id: id của thẻ input, caption: label trước thẻ input, code: ???, placeholder: placeholder, component: id của component tạo ra thẻ input , componentText: Tên của component, description: mô tả tác dụng của thẻ input, settings: ???
			actionLayout[2]: top: các nút có vị trí ở trên form
					bottom[2: Close, Save]: các nút có vị trí ở dưới form: id: id của nút, name: Tên của nút, caption:label trước button, code: ???, component: id của component tạo ra thẻ button, componentText: Tên cua component, description: mô tả tác dụng của nút, settings:???
	settingFieldComponents:settings: Chi tiết các thẻ input ở trong form, (caption, component, componentText): giống với trong thẻ input ở trên, componentType: , ordinalPosition:, ordinalPositionMapping:, parent: id của thẻ cha, parentText: Tên của cha, parentType: kiểu của thẻ cha, 		
					tableId: id của bảng chứa, tableName: tên của table, id: id của thẻ input, code: ???, name: Tên của thẻ input, description: mô tả của thẻ, created: thời gian tạo, createdByText: tên người tạo, createdBy: id của người tạo, (modified,modifiedByText,modiffiedBy): giống với created, version: phiên bản của thẻ input
					table: các tùy chỉnh của dữ liệu này trên khi hiển thị lên bảng[]: allowFilter: cho phép lọc, allowSummary: cho phép tóm tắt, autoNumber: tự động đánh số cho dữ liệu tiếp theo, dataType: Kiểu dữ liệu được lưu, dataSize: độ dài tối đa của dữ liệu được lưu, ordinalPosition: , placeholer: placeholdeer, storageType: Lưu trữ trong bảng động hay tĩnh
					view: các tùy chỉnh ở giao diện hiển thị[]: allowSearch: cho phép search, font: font chữ, fontColor: màu chữ, fontSize:độ lớn của chữ, description: mô tả dữ liệu,
					form: 
 
 settingForm: 
 id:id của form, 
 name: tên của form, tableId: id của bảng chứa dữ liệu của form, tableName: tên của bảng chứa, setting[]: chứa những thông tin chi tiết

data:
settingForm:
  - id: Id của form
  - name: Tên tiêu đề của form
  - tableId: Id của bảng sẽ lưu dữ liệu của form
  - tableName: Tên của bảng sễ lưu dữ lựu của form
  - settings: Object chứa các trường thông tin của form và các nút của form
    1. formLayout: mảng chứa các trường thông tin trong form nhập thông tin: 8 phần tử, mỗi phần tử hiển thị trên 1 dòng 
        => 8 dòng nhưng phần tử TASK_CODE có giá trị trong settingFieldCompoents là hidden = true nên không hiển thị
        => 7 dòng
        1) Phần tử thứ nhất: <Tiêu đề> 1 trường => dòng này có 1 trường => không phải chia theo cột
            + id: Id của trường thông tin này
            + caption: Label phía trước phần nhập thông tin này
            + code: ???
            + placeHolder: placeholder của thông tin
            + component: id của component tạo ra trường thông tin này
            + componentText: tên của component tạo ra trường thông tin này
            + description: mô tả của trường thông tin này
            + settings: Các tùy chỉnh thêm cho trường thông tin 
        2) Phần tử thứ nhất: <Tiêu đề> 1 trường => dòng này có 1 trường => không phải chia theo cột
            + id: Id của trường thông tin này
            + caption: Label phía trước phần nhập thông tin này
            + code: ???
            + placeHolder: placeholder của thông tin
            + component: id của component tạo ra trường thông tin này
            + componentText: tên của component tạo ra trường thông tin này
            + description: mô tả của trường thông tin này
            + settings: Các tùy chỉnh thêm cho trường thông tin 
        3) Phần tử thứ nhất: <Tiêu đề> 1 trường => dòng này có 1 trường => không phải chia theo cột
            + id: Id của trường thông tin này
            + caption: Label phía trước phần nhập thông tin này
            + code: ???
            + placeHolder: placeholder của thông tin
            + component: id của component tạo ra trường thông tin này
            + componentText: tên của component tạo ra trường thông tin này
            + description: mô tả của trường thông tin này
            + settings: Các tùy chỉnh thêm cho trường thông tin 
        4) Phần tử thứ nhất: <Tiêu đề> 1 trường => dòng này có 1 trường => không phải chia theo cột
            + id: Id của trường thông tin này
            + caption: Label phía trước phần nhập thông tin này
            + code: ???
            + placeHolder: placeholder của thông tin
            + component: id của component tạo ra trường thông tin này
            + componentText: tên của component tạo ra trường thông tin này
            + description: mô tả của trường thông tin này
            + settings: Các tùy chỉnh thêm cho trường thông tin   
        5) Phần tử thứ nhất: <Tiêu đề> 1 trường => dòng này có 1 trường => không phải chia theo cột
            + id: Id của trường thông tin này
            + caption: Label phía trước phần nhập thông tin này
            + code: ???
            + placeHolder: placeholder của thông tin
            + component: id của component tạo ra trường thông tin này
            + componentText: tên của component tạo ra trường thông tin này
            + description: mô tả của trường thông tin này
            + settings: Các tùy chỉnh thêm cho trường thông tin 
        6) Phần tử thứ nhất: <Tiêu đề> 1 trường => dòng này có 1 trường => không phải chia theo cột
            + id: Id của trường thông tin này
            + caption: Label phía trước phần nhập thông tin này
            + code: ???
            + placeHolder: placeholder của thông tin
            + component: id của component tạo ra trường thông tin này
            + componentText: tên của component tạo ra trường thông tin này
            + description: mô tả của trường thông tin này
            + settings: Các tùy chỉnh thêm cho trường thông tin 
        7) Phần tử thứ nhất: <Tiêu đề> 1 trường => dòng này có 1 trường => không phải chia theo cột
            + id: Id của trường thông tin này
            + caption: Label phía trước phần nhập thông tin này
            + code: ???
            + placeHolder: placeholder của thông tin
            + component: id của component tạo ra trường thông tin này
            + componentText: tên của component tạo ra trường thông tin này
            + description: mô tả của trường thông tin này
            + settings: Các tùy chỉnh thêm cho trường thông tin   
    2. actionLayout: các nút bấm tương tác của form
        + top: mảng chứa các nút bấm ở trên của form
        + bottom: mảng chứa các nút bấm ở bên dưới form: 2 phần tử
          1) Phần tử thứ nhất: Nút <Close>  
            - id: Id của nút bấm 
            - name: Giá trị của nút là: Close
            - caption: Label hiển thị phía trước nút bấm
            - code: ???
            - component: Id của component tạo ra nút Close
            - componentText: Tên của component tạo ra nút Close
            - description: Mô tả của nút bấm
            - settings: Các tùy chỉnh thêm cho nút bấm 
          2) Phần tử thứ hai: Nút <Save>  
            - id: Id của nút bấm 
            - name: Giá trị của nút là: Save
            - caption: Label hiển thị phía trước nút bấm
            - code: ???
            - component: Id của component tạo ra nút Save
            - componentText: Tên của component tạo ra nút Save
            - description: Mô tả của nút bấm
            - settings: Các tùy chỉnh thêm cho nút bấm   
      
