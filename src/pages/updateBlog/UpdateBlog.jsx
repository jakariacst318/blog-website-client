import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
    const update = useLoaderData()
    const { _id, title, sortDescription, longDescription, photo } = update
    // ---------------

    const handleUpdateBlog = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const category = form.category.value;
        const sortDescription = form.sortDescription.value;
        const longDescription = form.longDescription.value;
        const photo = form.photo.value;


        const updateBlog = { title, category, sortDescription, longDescription, photo }


        //  send data to the server
        fetch(`https://blog-website-server-beta.vercel.app/addBlog/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }

            })


    }
    // ---------------
    return (
        <div>
            <h2 className="text-center font-semibold text-3xl mt-5 mb-10"> Update blog:  <span className="text-orange-500"> {title}</span></h2>



            {<form onSubmit={handleUpdateBlog}>
                {/* form row  title and PhotoURL*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Title</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="title" defaultValue={title} id="" required placeholder="Title" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold"> Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" name="photo" defaultValue={photo} id="" placeholder="Photo URL" />
                            </label>
                        </div>
                    </div>

                </div>
                {/* sortDescription row  and longDescription */}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Short Description</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="sortDescription" defaultValue={sortDescription} id="" required placeholder="short description" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Long description
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" required name="longDescription" defaultValue={longDescription} id="" placeholder="long description" />
                        </label>
                    </div>


                </div>

                {/* category */}
                <select className="font-semibold text-xl text-white bg-slate-500 py-5 px-3 rounded-xl my-6" id="category">
                    <option value="Travel Tours">Travel Tours</option>
                    <option value="Sirajganj">Sirajganj</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="THAILAND">THAILAND</option>
                    <option value="MYANMAR">MYANMAR</option>
                </select>
                <input type="submit" value=" Update Blog" className="btn btn-block hover:bg-[#ca630a] bg-[#E67E22] hover:border-0 border-0 text-white  uppercase mb-10" />
            </form>}
        </div>
    );
};

export default UpdateBlog;