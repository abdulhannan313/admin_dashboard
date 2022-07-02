import React,{useState}  from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject,Selection,Toolbar } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

const Employees = () => {
  const toolbarOptions = ['Delete','Search','Add','Update','Cancel','Edit'];
  const selectionsettings = { persistSelection: true };
  const editing = { allowDeleting: true, allowEditing: true,allowAdding:true };
  const [visibility, setDialogVisibility] = useState(false);
    function onOverlayClick() {
        setDialogVisibility(false);
    }
    function dialogClose() {
        setDialogVisibility(false);
    }
    function handleClick() {
        setDialogVisibility(true);
    }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <ButtonComponent style={{ borderRadius:5,margin:"10px",backgroundColor:"#03c9d7",color:"white"}} onClick={handleClick}>+Add Employee</ButtonComponent>
      <div className="App" id="dialog-target" >
      
      <DialogComponent width="500px" 
      isModal={true} target="#dialog-target" visible={visibility} close={dialogClose} showCloseIcon={true}
      header='EMPLOYEE' closeOnEscape={false}
      overlayClick={onOverlayClick}>{' '}

      <form>
      
        <ul>
          <li>
          <label >ID</label>
      <input className="e-input" type="text"/> 
          </li>
          <li>
          <label >NAME</label>
      <input className="e-input" type="text"/>  
          </li>
          <li>
          <label >DESIGNATION</label>
      <input className="e-input" type="text"/>
          </li>
          <li>
          <label >COUNTRY</label>
      <input className="e-input" type="text"/>   
          </li>
          <li>
          <label >HIRE DATE</label>
      <input className="e-input" type="text"/>  
          </li>
          <li>
          <label >REPORT TO</label>
      <input className="e-input" type="text"/>
          </li>
          
          <ButtonComponent style={{margin:"10px",backgroundColor:"#03c9d7",color:"white", borderRadius:5}} >Submit</ButtonComponent>
        </ul>
      </form>
      </DialogComponent>
    </div>

      <GridComponent
        enableHover={true}
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        id="gridcomp"
        allowPaging
        allowAdding={true}
        allowExcelExport={true}
        allowPdfExport={true}
        dataSource={employeesData}
        width="900px"

      >
        
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Selection, Toolbar]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
