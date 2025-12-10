import Service from '../models/serviceModel.js';


// create a new service
export const createService = async (req, res ) => {
   try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(200).json({message: "Services Added Successfully", data:newService})
   } catch (error) {
     res.status(503).json({message:"Cannot add the service, Error in the create service"})
   }
}

//getAll service
export const getAllServices = async (req,res) => {
    try {
   const getService = await Service.find()
    res.status(200).json({message: "Services Retrieve Successfully", data:getService})

   } catch (error) {
     res.status(503).json({message:"Cannot Retrieve the service, Error in get all service"})
   }
}

// get service by id 
// export const getServiceById = async (req,res) => {
//      try {
//      const serviceId = req.params.id;
//      const serviceDetail = await Service.findById(serviceId)
//      if (!serviceDetail) {
//         res.status(404).json({message:"Service not found"})
//      }
//      res.status(200).json({message: "Service Retrieved Successfully", data:serviceDetail})

//    } catch (error) {
//      res.status(503).json({message:"Cannot Retrieve the service, Error in get service by ID"})
//    }
// }

//update service
export const updateService = async (req, res)=> {
    try {
     const serviceId = req.params.id;
     const {name,  description, price} = req.body;
     const result = await Service.findByIdAndUpdate(
        {_id:serviceId},
        {name, description, price},
        {new: true}
     );
     if (!result) {
         return res.status(404).json({message: "Service not found"})
        }
        res.status(200).json({message: "Service updated Successfully",data: result})
        
    } catch (error) {
     res.status(503).json({message:"Cannot add the service, Error in the create service"})
   }
};

//delete service
export const deleteService = async (req, res) => {
     try {
     const serviceId = req.params.id;
     const result = await Service.findByIdAndDelete({_id : serviceId})
     if (!result) {
        return res.status(404).json({message: "Service not found"})
        }
        const prod = await Service.find();
        res.status(200).json({message: "Service deleted Successfully",data: result})
        
    } catch (error) {
     res.status(503).json({message:"Cannot delete the service, Error in the delete service"})
   }
}