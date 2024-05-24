<template lang="">
  <section>
    <h3>Añadir Profesor</h3>
    <div>
      <label for="">Nombre</label>
      <input type="text" v-model="teacher.teacherName">
    </div>
    <div>
      <label for="">Apellido</label>
      <input type="text" v-model="teacher.surname">
    </div>
    <div>
      <label for="">DNI / NIF</label>
      <input type="text" v-model="teacher.dni">
    </div>
    <div>
      <label for="">Materias</label>
      <input type="text" v-model="subject">
      <button @click="handleSubject()">Agregar</button>
    </div>
    <div>
      <ul>
        <li v-for="(subject, index) in teacher.subjects" :key="index">
         <span>{{subject}}</span>
        </li>
      </ul>
    </div>
    <div>
      <input type="checkbox" name="" id="" v-model="teacher.sendedDocs">
      <label for="">¿Documentación Entregada?</label>
      <button @click="handleAddTeacher()">Agregar Profesor</button>
    </div>
  </section>

  <section>
    <h3>
      Listado de profesores
    </h3>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>DNI</th>
        <th>Materias</th>
        <th>Documentación Entregada</th>
      </tr>
      <tr v-for="(teacherItem, index) in teachers" :key="teachers.dni">
        <th>{{teacherItem.teacherName}}</th>
        <th>{{teacherItem.surname}}</th>
        <th>{{teacherItem.dni}}</th>
        <th>
          <ul>
            <li v-for="(subject, index) in teacherItem.subjects" :key="index">
              {{subject}}
            </li>
          </ul>
        </th>
        <th v-if="teacherItem.doc">Entregada</th>
        <th v-else>No Entregada</th>
      </tr>
    </table>
  </section>
</template>

<script lang="ts" setup>
import type { ITeacher } from "@/models/teacher";
import { type Ref, ref, onMounted, onUpdated } from "vue";

let teacher: Ref<ITeacher> = ref({
  teacherName: "",
  surname: "",
  dni: "",
  subjects: [],
  sendedDocs: false,
});
let teachers: Ref<Array<ITeacher>> = ref([]);
let subject: Ref<string> = ref("");

const handleSubject = () => {
  teacher.value.subjects.push(subject.value);
  subject.value = "";
};
const handleAddTeacher = () => {
  teachers.value.push({
    teacherName: teacher.value.teacherName,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    sendedDocs: teacher.value.sendedDocs,
    subjects: teacher.value.subjects,
  });

  teacher.value.teacherName = "";
  teacher.value.surname = "";
  teacher.value.dni = "";
  teacher.value.subjects = [];
  teacher.value.sendedDocs = false;
};

// ?? Ciclo de vida
onMounted(() => {
  console.debug('[mounted]')
})
onUpdated(() => {
  console.debug('[updated]')
}),
</script>

<style lang="">
</style>