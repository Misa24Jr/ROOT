var struct =
{
  objects : new Array,
addPropertyMethod : function(id)
{
  struct.objects[id].getFieldNameByPos  =  function(index)
  {
    return struct.getFieldNameByPos(id,index);
  }
  struct.objects[id].getIndexStruct  =  function()
  {
    return struct.getIndexStruct(id);
  }
  struct.objects[id].getOffSetPage  =  function()
  {
    return struct.getOffSetPage(id);
  }
  struct.objects[id].getItemPage  =  function()
  {
    return struct.getItemPage(id);
  }
  struct.objects[id].getPageSize  =  function()
  {
    return struct.getPageSize(id);
  }
  struct.objects[id].getFieldsVector  =  function()
  {
    return struct.getFieldsVector(id);
  }
  struct.objects[id].getObject  =  function()
  {
    return struct.getObject(id);
  }
  struct.objects[id].setFieldsVector  =  function( vector)
  {
    struct.setFieldsVector(id, vector);
  }
  struct.objects[id].setFieldsByPos  =  function(index,value)
  {
    struct.setFieldsByPos(id,index,value);
  }
  struct.objects[id].setFieldArrayToStruct  =  function(fieldArray)
  {
    struct.setFieldArrayToStruct(id,fieldArray);
  }
  struct.objects[id].replaceFieldName  =  function(nameFieldOrg,nameFieldDes)
  {
    struct.replaceFieldName(id,nameFieldOrg,nameFieldDes);
  }
  struct.objects[id].basic = new Object();
  struct.objects[id].basic.clear  =  function()
  {
    struct.basic.clear(id);
  }
  struct.objects[id].basic.colCount  =  function()
  {
    return struct.basic.colCount(id);
  }
  struct.objects[id].basic.getDataByPos  =  function( index)
  {
    return struct.basic.getDataByPos(id, index);
  }
  struct.objects[id].basic.getDataByName  =  function(name)
  {
    return struct.basic.getDataByName(id,name);
  }
  struct.objects[id].basic.getFieldNameByPos  =  function(index)
  {
    return struct.basic.getFieldNameByPos(id,index);
  }
  struct.objects[id].basic.getDataVector  =  function()
  {
    return struct.basic.getDataVector(id);
  }
  struct.objects[id].basic.getFieldsVector  =  function()
  {
    return struct.basic.getFieldsVector(id);
  }
  struct.objects[id].basic.setDataVector  =  function( vector)
  {
    struct.basic.setDataVector(id, vector);
  }
  struct.objects[id].basic.setDataByPos  =  function(index,value)
  {
    struct.basic.setDataByPos(id,index,value);
  }
  struct.objects[id].basic.setDataByName  =  function(name,value)
  {
    struct.basic.setDataByName(id,name,value);
  }
  struct.objects[id].basic.setFieldsVector  =  function( vector)
  {
    struct.basic.setFieldsVector(id, vector);
  }
  struct.objects[id].basic.setFieldsByPos  =  function(index,value)
  {
    struct.basic.setFieldsByPos(id,index,value);
  }
  struct.objects[id].basic.replaceFieldName  =  function(nameFieldOrg,nameFieldDes)
  {
    struct.basic.replaceFieldName(id,nameFieldOrg,nameFieldDes);
  }
  //extend
  struct.objects[id].extend = new Object();
  struct.objects[id].extend.addRecord  =  function(rec)
  {
    struct.extend.addRecord(id,rec);
  }
  struct.objects[id].extend.clear  =  function()
  {
    struct.extend.clear(id);
  }
  struct.objects[id].extend.colCount  =  function()
  {
    struct.extend.colCount(id);
  }
  struct.objects[id].extend.deleteRecord  =  function(index)
  {
    struct.extend.deleteRecord(id,index);
  }
  struct.objects[id].extend.deleteLastRecord  =  function()
  {
    struct.extend.deleteLastRecord(id);
  }
  struct.objects[id].extend.deleteFirstRecord  =  function()
  {
    struct.extend.deleteFirstRecord(id);
  }
  struct.objects[id].extend.first  =  function()
  {
    return struct.extend.first(id);
  }
  struct.objects[id].extend.getRecordByPos  =  function( index)
  {
    return struct.extend.getRecordByPos(id, index);
  }
  struct.objects[id].extend.getRecordByName  =  function(fieldName,value)
  {
    return struct.extend.getRecordByName(id,fieldName,value);
  }
  struct.objects[id].extend.getFieldNameByPos  =  function(index)
  {
    return struct.extend.getFieldNameByPos(id,index);
  }
  struct.objects[id].extend.getFieldsVector  =  function()
  {
    return struct.extend.getFieldsVector(id);
  }
  struct.objects[id].extend.last  =  function()
  {
    return struct.extend.last(id);
  }
  struct.objects[id].extend.next  =  function()
  {
    return struct.extend.next(id);
  }
  struct.objects[id].extend.prior  =  function()
  {
    return struct.extend.prior(id);
  }
  struct.objects[id].extend.replaceFieldName  =  function(nameFieldOrg,nameFieldDes)
  {
    struct.extend.replaceFieldName(id,nameFieldOrg,nameFieldDes);
  }
  struct.objects[id].extend.rowCount  =  function()
  {
    return struct.extend.rowCount(id);
  }
  struct.objects[id].extend.setFieldsVector  =  function( vector)
  {
    struct.extend.setFieldsVector(id, vector);
  }
  struct.objects[id].extend.setFieldsByPos  =  function(index,value)
  {
    struct.extend.setFieldsByPos(id,index,value);
  }
  struct.objects[id].extend.setRecord  =  function(index,rec)
  {
    struct.extend.setRecord(id,index,rec);
  }
  struct.objects[id].extend.setRecordByName  =  function(fieldName,value,record)
  {
    struct.extend.setRecordByName(id,fieldName,value,record);
  }
  struct.objects[id].multiplex = new Object();
  struct.objects[id].multiplex.addArrayRecord  =  function( arr)
  {
    struct.multiplex.addArrayRecord(id, arr);
  }
  struct.objects[id].multiplex.deleteArrayRecord  =  function(index)
  {
    struct.multiplex.deleteArrayRecord(id,index);
  }
  struct.objects[id].multiplex.firstArray  =  function()
  {
    return struct.multiplex.firstArray(id);
  }
  struct.objects[id].multiplex.firstArrayRecord  =  function()
  {
    return struct.multiplex.firstArrayRecord(id);
  }
  struct.objects[id].multiplex.firstRecord  =  function()
  {
    return struct.multiplex.firstRecord(id);
  }
  struct.objects[id].multiplex.getArrayByPos  =  function( index)
  {
    return struct.multiplex.getArrayByPos(id, index);
  }
  struct.objects[id].multiplex.getRecordByPos  =  function( index1,index2)
  {
    return struct.multiplex.getRecordByPos(id, index1,index2);
  }
  struct.objects[id].multiplex.getArrayRecordByPos  =  function( index)
  {
    return struct.multiplex.getArrayRecordByPos(id, index);
  }
  struct.objects[id].multiplex.getFieldNameByPos  =  function(index)
  {
    return struct.multiplex.getFieldNameByPos(id,index);
  }
  struct.objects[id].multiplex.getFieldsVector  =  function()
  {
    return struct.multiplex.getFieldsVector(id);
  }
  struct.objects[id].multiplex.lastArray  =  function()
  {
    return struct.multiplex.lastArray(id);
  }
  struct.objects[id].multiplex.lastArrayRecord  =  function()
  {
    return struct.multiplex.lastArrayRecord(id);
  }
  struct.objects[id].multiplex.lastRecord  =  function()
  {
    return struct.multiplex.lastRecord(id);
  }
  struct.objects[id].multiplex.nextArray  =  function()
  {
    return struct.multiplex.nextArray(id);
  }
  struct.objects[id].multiplex.nextArrayRecord  =  function()
  {
    return struct.multiplex.nextArrayRecord(id);
  }
  struct.objects[id].multiplex.nextRecord  =  function()
  {
    return struct.multiplex.nextRecord(id);
  }
  struct.objects[id].multiplex.priorArray  =  function()
  {
    return struct.multiplex.priorArray(id);
  }
  struct.objects[id].multiplex.priorArrayRecord  =  function()
  {
    return struct.multiplex.priorArrayRecord(id);
  }
  struct.objects[id].multiplex.priorRecord  =  function()
  {
    return struct.multiplex.priorRecord(id);
  }
  struct.objects[id].multiplex.rowCount  =  function()
  {
    return struct.multiplex.rowCount(id);
  }
  struct.objects[id].multiplex.setFieldsVector  =  function( vector)
  {
    struct.multiplex.setFieldsVector(id, vector);
  }
  struct.objects[id].multiplex.setFieldsByPos  =  function(index,value)
  {
    struct.multiplex.setFieldsByPos(id,index,value);
  }
  struct.objects[id].multiplex.setArrayByPos  =  function(index, arr)
  {
    struct.multiplex.setArrayByPos(id,index, arr);
  }
  struct.objects[id].multiplex.setRecordByPos  =  function(index1,index2,rec)
  {
    struct.multiplex.setRecordByPos(id,index1,index2,rec);
  }
  struct.objects[id].multiplex.replaceFieldName  =  function(nameFieldOrg,nameFieldDes)
  {
    struct.multiplex.replaceFieldName(id,nameFieldOrg,nameFieldDes);
  }
},
  createObjStruct : function(id,type,offSetPage,pageSize,itemPage)
  {
    if(this.createObjStruct.arguments.length > 2)
    {
      this.objects[id] = new Object();
      this.objects[id].type = type;
      this.objects[id].offSetPage = offSetPage;
      this.objects[id].pageSize = pageSize;
      this.objects[id].itemPage = itemPage;
      this.objects[id].fields = new Array;
      this.objects[id].data = [[],[]];
    }
    else
    {
      this.objects[id] = new Object();
      this.objects[id].type = type;
      this.objects[id].fields = new Array;
      this.objects[id].data = new Array;
    }
	this.addPropertyMethod(id);
	return this.objects[id];
  },
  create : function(id,struct)
  {
    this.objects[id]=struct;
    this.objects[id].nameComponent = 'struct';
    this.objects[id].id=id;
	this.addPropertyMethod(id);
	return this.objects[id];
  },
  getFieldNameByPos : function(id,index)
  {
    return struct.objects[id].fields[index];
  },
  getIndexStruct : function(id)
  {
    return this.objects[id].itemPage * this.objects[id].pageSize + this.objects[id].offSetPage;
  },
  getOffSetPage : function(id)
  {
    return this.objects[id].offSetPage;
  },
  getItemPage : function(id)
  {
    return this.objects[id].itemPage;
  },
  getPageSize : function(id)
  {
    return this.objects[id].pageSize;
  },
  getFieldsVector : function(id)
  {
    return struct.objects[id].fields;
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  setFieldsVector : function(id, vector)
  {
    for(ix=0;ix<vector.length;ix++)
    {
      struct.objects[id].fields[ix]=vector[ix];
    }
  },
  setFieldsByPos : function(id,index,value)
  {
    struct.objects[id].fields[index]=value;
  },
  setFieldArrayToStruct : function(id,fieldArray)
  {
    this.objects[id].fields = fieldArr;
  },
  replaceFieldName : function(id,nameFieldOrg,nameFieldDes)
  {
    for(ix=0;ix<struct.objects[id].fields.length;ix++)
    {
      if(nameFieldOrg == struct.objects[id].fields[ix])
      {
        struct.objects[id].fields[ix]=nameFieldDes;
      }
    }
  },
  basic :
  {
    clear : function(id)
    {
      for(ix=0;ix<struct.objects[id].data.length;ix++)
      {
        struct.objects[id].data[ix]="";
      }
    },
    colCount : function(id)
    {
      return struct.objects[id].fields.length;
    },
    getDataByPos : function(id, index)
    {
      return struct.objects[id].data[index];
    },
    getDataByName : function(id,name)
    {
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        if(name==struct.objects[id].fields[ix])
        {
          return struct.objects[id].data[ix];
        }
      }
      return "";
    },
    getFieldNameByPos : function(id,index)
    {
      return struct.getFieldNameByPos(id,index);
    },
    getDataVector : function(id)
    {
      return struct.objects[id].data;
    },
    getFieldsVector : function(id)
    {
      return struct.getFieldsVector(id);
    },
    setDataVector : function(id, vector)
    {
      for(ix=0;ix<vector.length;ix++)
      {
        struct.objects[id].data[ix]=vector[ix];
      }
    },
    setDataByPos : function(id,index,value)
    {
      struct.objects[id].data[index]=value;
    },
    setDataByName : function(id,name,value)
    {
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        if(name==struct.objects[id].fields[ix])
        {
          struct.objects[id].data[ix]=value;
        }
      }
    },
    setFieldsVector : function(id, vector)
    {
      struct.setFieldsVector(id,vector);
    },
    setFieldsByPos : function(id,index,value)
    {
      struct.setFieldsByPos(id,index,value);
    },
    replaceFieldName : function(id,nameFieldOrg,nameFieldDes)
    {
      struct.replaceFieldName(id,nameFieldOrg,nameFieldDes);
    }
  },
  extend :
  {
    itemIndex : 0,
    record : new Array,
    addRecord : function(id,rec)
    {
      var totalRec=struct.objects[id].fields.length;
      for(ix=0;ix<totalRec;ix++)
      {
        struct.objects[id].data[ix].push(rec[ix]);
      }
    },
    clear : function(id)
    {
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        for(iy=0;iy<struct.objects[id].data[ix].length;iy++)
        {
          struct.objects[id].data[ix][iy]="";
        }
      }
    },
    colCount : function(id)
    {
      return struct.objects[id].fields.length;
    },
    deleteRecord : function(id,index)
    {
      this.itemIndex=index;
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        struct.objects[id].data[ix].splice(index,1);
      }
    },
    deleteLastRecord : function(id)
    {
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        struct.objects[id].data[ix].pop();
      }
    },
    deleteFirstRecord : function(id)
    {
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        struct.objects[id].data[ix].shift();
      }
    },
    first : function(id)
    {
      this.itemIndex=0;
      return this.getRecordByPos(id,this.itemIndex);
    },
    getRecordByPos : function(id, index)
    {
      this.itemIndex=index;
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        this.record[ix]=struct.objects[id].data[ix][index];
      }
      return this.record;
    },
    getRecordByName : function(id,fieldName,value)
    {
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        if(fieldName==struct.objects[id].fields[ix])
        {
          for(iy=0;iy<struct.objects[id].fields.length;iy++)
          {
            if(struct.objects[id].data[ix][iy]==value)
            {
              this.itemIndex=iy;
              return this.getRecordByPos(id,this.itemIndex);
            }
          }
          return null;
        }
      }
      return null;
    },
    getFieldNameByPos : function(id,index)
    {
      this.itemIndex=index;
      return struct.getFieldNameByPos(id,index);
    },
    getFieldsVector : function(id)
    {
      return struct.getFieldsVector(id);
    },
    last : function(id)
    {
      this.itemIndex = struct.objects[id].fields.length-1;
      return this.getRecordByPos(id, this.itemIndex);
    },
    next : function(id)
    {
      if(this.itemIndex < struct.objects[id].fields.length-1)
      {
        this.itemIndex=this.itemIndex+1;
        return this.getRecordByPos(id, this.itemIndex);
      }
      else
      {
        return null;
      }
    },
    prior : function(id)
    {
      if(this.itemIndex > 0)
      {
        this.itemIndex=this.itemIndex-1;
        return this.getRecordByPos(id, this.itemIndex);
      }
      else
      {
        return null;
      }
    },
    replaceFieldName : function(id,nameFieldOrg,nameFieldDes)
    {
      struct.replaceFieldName(id,nameFieldOrg,nameFieldDes);
    },
    rowCount : function(id)
    {
      return struct.objects[id].data[0].length;
    },
    setFieldsVector : function(id, vector)
    {
      struct.setFieldsVector(id,vector);
    },
    setFieldsByPos : function(id,index,value)
    {
      this.itemIndex=index;
      struct.setFieldsByPos(id,index,value);
    },
    setRecord : function(id,index,rec)
    {
      this.itemIndex=index;
      for(ix=0;ix<struct.objects[id].fields.length;ix++)
      {
        this.record[ix]=rec[ix];
        struct.objects[id].data[ix][index]=this.record[ix];
      }
    },
    setRecordByName : function(id,fieldName,value,record)
    {
      this.getRecordByName(id,fieldName,value);
      this.setRecord(id,this.itemIndex,record);
    }
  },
  multiplex :
  {
    itemIndex : 0,
    itemIndexRecord : 0,
    record : new Array,
    arrayRecord : new Array(new Array),
    addArrayRecord : function(id, arr)
    {
      var totalRec=struct.objects[id].fields.length;
      for(ix=0;ix<totalRec;ix++)
      {
        struct.objects[id].data[ix].push(arr[ix]);
      }
    },
    deleteArrayRecord : function(id,index)
    {
      this.itemIndex=index;
      this.itemIndexRecord=0;
      for(ix=0; ix < struct.objects[id].fields.length; ix++)
      {
        struct.objects[id].data[ix].splice(index,1);
      }
    },
    firstArray : function(id)
    {
      this.itemIndex=0;
      return this.getArrayByPos(id,this.itemIndex);
    },
    firstArrayRecord : function(id)
    {
      this.itemIndex=0;
      return this.getArrayRecordByPos(id,this.itemIndex);
    },
    firstRecord : function(id)
    {
      this.itemIndex=0;
      this.itemIndexRecord=0;
      return this.getRecordByPos(id,this.itemIndex,0);
    },
    getArrayByPos : function(id, index)
    {
      this.itemIndex=index;
      return struct.objects[id].data[this.itemIndex];
    },
    getRecordByPos : function(id, index1,index2)
    {
      this.itemIndex=index1;
      this.itemIndexRecord=index2;
      this.record=struct.objects[id].data[index1][index2];
      return this.record;
    },
    getArrayRecordByPos : function(id, index)
    {
      this.itemIndex=index;
      for(ix=0; ix < struct.objects[id].fields.length; ix++)
      {
        this.arrayRecord[ix]=struct.objects[id].data[ix][index];
      }
      return this.arrayRecord;
    },
    getFieldNameByPos : function(id,index)
    {
      return struct.getFieldNameByPos(id,index);
    },
    getFieldsVector : function(id)
    {
      return struct.getFieldsVector(id);
    },
    lastArray : function(id)
    {
      this.itemIndex = struct.objects[id].fields.length-1;
      this.itemIndexRecord=0;
      return this.getArrayByPos(id, this.itemIndex);
    },
    lastArrayRecord : function(id)
    {
      this.itemIndex = struct.objects[id].fields.length-1;
      this.itemIndexRecord=0;
      return this.getArrayRecordByPos(id, this.itemIndex);
    },
    lastRecord : function(id)
    {
      this.itemIndex = struct.objects[id].fields.length-1;
      this.itemIndexRecord=struct.objects[id].data[this.itemIndex].length-1;
      return this.getRecordByPos(id, this.itemIndex,this.itemIndexRecord);
    },
    nextArray : function(id)
    {
      if(this.itemIndex < struct.objects[id].fields.length-1)
      {
        this.itemIndex=this.itemIndex+1;
        this.itemIndexRecord=0;
        return this.getArrayByPos(id, this.itemIndex);
      }
      else
      {
        return null;
      }
    },
    nextArrayRecord : function(id)
    {
      if(this.itemIndex < struct.objects[id].fields.length-1)
      {
        this.itemIndex=this.itemIndex+1;
        this.itemIndexRecord=0;
        return this.getArrayRecordByPos(id, this.itemIndex);
      }
      else
      {
        return null;
      }
    },
    nextRecord : function(id)
    {
      if(this.itemIndexRecord < struct.objects[id].data[this.itemIndex].length-1)
      {
        this.itemIndexRecord=this.itemIndexRecord+1;
        return this.getRecordByPos(id, this.itemIndex,this.itemIndexRecord);
      }
      else
      {
        return null;
      }
    },
    priorArray : function(id)
    {
      if(this.itemIndex > 0)
      {
        this.itemIndex=this.itemIndex-1;
        this.itemIndexRecord=0;
        return this.getArrayByPos(id, this.itemIndex);
      }
      else
      {
        return null;
      }
    },
    priorArrayRecord : function(id)
    {
      if(this.itemIndex > 0)
      {
        this.itemIndex=this.itemIndex-1;
        this.itemIndexRecord=0;
        return this.getArrayRecordByPos(id, this.itemIndex);
      }
      else
      {
        return null;
      }
    },
    priorRecord : function(id)
    {
      if(this.itemIndexRecord > 0)
      {
        this.itemIndexRecord=this.itemIndexRecord-1;
        return this.getRecordByPos(id, this.itemIndex,this.itemIndexRecord);
      }
      else
      {
        return null;
      }
    },
    rowCount : function(id)
    {
      return struct.objects[id].data[0].length;
    },
    setFieldsVector : function(id, vector)
    {
      struct.setFieldsVector(id, vector);
    },
    setFieldsByPos : function(id,index,value)
    {
      struct.setFieldsByPos(id,index,value);
    },
    setArrayByPos : function(id,index, arr)
    {
      this.itemIndex=index;
      struct.objects[id].data[this.itemIndex]=arr;
    },
    setRecordByPos : function(id,index1,index2,rec)
    {
      this.itemIndex=index1;
      this.itemIndexRecord=index2;
      struct.objects[id].data[index1][index2]=rec;
    },
    replaceFieldName : function(id,nameFieldOrg,nameFieldDes)
    {
      struct.replaceFieldName(id,nameFieldOrg,nameFieldDes);
    }
  }
}