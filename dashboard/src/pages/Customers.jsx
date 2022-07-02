import React, {useState} from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject,Selection,Toolbar} from '@syncfusion/ej2-react-grids';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete','Search','Add','Update','Cancel','Edit'];
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
  
  return (<>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      
      <Header category="Page" title="Customers" />
      <ButtonComponent style={{margin:"10px",backgroundColor:"#03c9d7",color:"white", borderRadius:5}} onClick={handleClick}>+Add Customer</ButtonComponent>
      <div className="App" id="dialog-target" style={{borderRadius:"50px"}}>
      
      <DialogComponent width="500px" 
      isModal={true} target="#dialog-target" visible={visibility} close={dialogClose} showCloseIcon={true}
      header='CUSTOMER' closeOnEscape={false}
      overlayClick={onOverlayClick}>{' '}

      <form>
        <ul>
          <li>
          <label className="font-semibold dark:text-gray-200">ID</label>
      <input  className="e-input" type="text"  /> 
          </li>
          <li>
          <label className="font-semibold dark:text-gray-200">NAME</label>
      <input className="e-input" type="text"/>  
          </li>
          <li>
          <label className="font-semibold dark:text-gray-200">PROJECT NAME</label>
      <input className="e-input" type="text"/>
          </li>
          <li>
          <label className="font-semibold dark:text-gray-200">BUDGET</label>
      <input className="e-input" type="text"/>   
          </li>
          <li>
          <label className="font-semibold dark:text-gray-200">STATUS</label>
      <input className="e-input" type="text"/>  
          </li>
          <li>
          <label className="font-semibold dark:text-gray-200">WEEKS</label>
      <input className="e-input" type="text"/>
          </li>
          <li>
          <label className="font-semibold dark:text-gray-200">LOCATION</label>
      <input className="e-input" type="text"/>  
          </li>
          <ButtonComponent style={{ borderRadius:5,margin:"10px",backgroundColor:"#03c9d7",color:"white"}} >Submit</ButtonComponent>
        </ul>
      </form>
      </DialogComponent>
    </div>
      <GridComponent
        dataSource={customersData}
        enableHover={true}
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        width="900px"
        id="gridcomp"
        allowPaging
        allowAdding={true}
        allowExcelExport={true}
        allowPdfExport={true}
        
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Selection, Toolbar]} />
      </GridComponent>
      
    </div>
    
  </>);
};

export default Customers;
