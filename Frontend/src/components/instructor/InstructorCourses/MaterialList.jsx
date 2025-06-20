// // src/components/instructor/MaterialList.js
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   IconButton,
//   Divider,
//   TextField,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   Paper,
//   CircularProgress,
// } from "@mui/material";
// import {
//   Add as AddIcon,
//   AttachFile as AttachFileIcon,
//   CloudUpload as CloudUploadIcon,
//   Delete as DeleteIcon,
//   Download as DownloadIcon,
// } from "@mui/icons-material";
// import InstructorService from "../../../services/instructorService";

// const MaterialList = ({ courseId }) => {
//   const [materials, setMaterials] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [newMaterialName, setNewMaterialName] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUploadMaterial = async () => {
//     if (!file || !newMaterialName) return;

//     try {
//       setUploading(true);
//       // First upload the file
//       const uploadResponse = await InstructorService.uploadAttachment(file);

//       // Then create the material record
//       // This would be a new endpoint you'd need to create in your backend
//       // await InstructorService.createCourseMaterial(courseId, {
//       //   name: newMaterialName,
//       //   file_url: uploadResponse.secure_url,
//       //   file_id: uploadResponse.id
//       // });

//       // Refresh materials list
//       // const updatedMaterials = await InstructorService.getCourseMaterials(courseId);
//       // setMaterials(updatedMaterials);

//       setNewMaterialName("");
//       setFile(null);
//     } catch (error) {
//       console.error("Error uploading material:", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteMaterial = async (materialId) => {
//     try {
//       // First delete the file from storage
//       const material = materials.find((m) => m.id === materialId);
//       if (material) {
//         await InstructorService.deleteAttachment(material.file_id);
//       }

//       // Then delete the material record
//       // await InstructorService.deleteCourseMaterial(courseId, materialId);

//       // Refresh materials list
//       // const updatedMaterials = await InstructorService.getCourseMaterials(courseId);
//       // setMaterials(updatedMaterials);
//     } catch (error) {
//       console.error("Error deleting material:", error);
//     }
//   };

//   return (
//     <Box>
//       <Paper sx={{ p: 2, mb: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Add New Material
//         </Typography>
//         <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//           <TextField
//             fullWidth
//             variant="outlined"
//             size="small"
//             label="Material Name"
//             value={newMaterialName}
//             onChange={(e) => setNewMaterialName(e.target.value)}
//           />
//           <Button
//             variant="outlined"
//             component="label"
//             startIcon={<AttachFileIcon />}
//           >
//             Select File
//             <input type="file" hidden onChange={handleFileChange} />
//           </Button>
//         </Box>
//         {file && (
//           <Typography variant="body2" sx={{ mb: 2 }}>
//             Selected: {file.name}
//           </Typography>
//         )}
//         <Button
//           variant="contained"
//           startIcon={<CloudUploadIcon />}
//           onClick={handleUploadMaterial}
//           disabled={!file || !newMaterialName || uploading}
//         >
//           {uploading ? <CircularProgress size={24} /> : "Upload Material"}
//         </Button>
//       </Paper>

//       <Divider sx={{ my: 3 }} />

//       <Typography variant="h6" gutterBottom>
//         Course Materials
//       </Typography>

//       {loading ? (
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//           <CircularProgress />
//         </Box>
//       ) : materials.length === 0 ? (
//         <Typography variant="body2" color="text.secondary">
//           No materials uploaded yet
//         </Typography>
//       ) : (
//         <List>
//           {materials.map((material) => (
//             <Card key={material.id} variant="outlined" sx={{ mb: 1 }}>
//               <CardContent>
//                 <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                   <Typography variant="subtitle1">{material.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {material.file_type}
//                   </Typography>
//                 </Box>
//               </CardContent>
//               <CardActions sx={{ justifyContent: "flex-end" }}>
//                 <IconButton>
//                   <DownloadIcon />
//                 </IconButton>
//                 <IconButton onClick={() => handleDeleteMaterial(material.id)}>
//                   <DeleteIcon color="error" />
//                 </IconButton>
//               </CardActions>
//             </Card>
//           ))}
//         </List>
//       )}
//     </Box>
//   );
// };

// export default MaterialList;
